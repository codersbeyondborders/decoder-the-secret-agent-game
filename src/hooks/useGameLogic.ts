import { useState, useEffect } from "react";
import { levels } from "../shared/levels.ts";
import hintSound from "../assets/sounds/hint.mp3";
import { ScoreboardManager } from "../utils/scoreboard.ts";
import { Scoreboard } from "../API";

type Screen =
  | "loading"
  | "start"
  | "leaderboard"
  | "howToPlay"
  | "missionBriefing"
  | "level"
  | "success"
  | "fail"
  | "final-loading"
  | "final";

export const useGameLogic = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("start");
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [randomMessage, setRandomMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [hintsUsed, setHintsUsed] = useState([false, false, false, false, false, false, false, false, false, false]);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [currentHint, setCurrentHint] = useState("");
  const [timer, setTimer] = useState(60);
  
  // Add new state for user management
  const [currentUser, setCurrentUser] = useState<Scoreboard | null>(null);
  const [userError, setUserError] = useState<string | null>(null);
  const [showUserError, setShowUserError] = useState(false);

  const updateScoreAndSync = async (newScore: number) => {
    setScore(newScore);
    const uname = localStorage.getItem('GameUser');
    if (uname) {
      try {
        console.log('Updating score:', { userID: uname, newScore });
        await ScoreboardManager.updateScore(uname, newScore);
        console.log('Score update successful');
      } catch (error) {
        console.error('Failed to update score in the database:', error);
        // You might want to show an error to the user here
      }
    } else {
      console.warn('No current user found when trying to update score');
    }
  };
  

  // Initialize or get user
  const initializeUser = async (username: string) => {
  try {
    console.warn('Initialize or get user...');
    const user = await ScoreboardManager.getOrCreateUser(username);
    setCurrentUser(user);
    if (user?.score) {
      console.log('Initializing user with score:', user.score);
      setScore(user.score);
    }
    return user;
  } catch (error) {
    console.error('Error initializing user:', error);
    setUserError("Agent ID must be AlphaNumeric between 6-16 characters");
    setShowUserError(true);
    return null;
  }
};

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const levelData = levels[currentLevel - 1];
    if (levelData) {
      const randomIndex = Math.floor(Math.random() * levelData.messages.length);
      const selectedMessage = levelData.messages[randomIndex];

      setRandomMessage(selectedMessage);
      setEncryptedMessage(levelData.algorithm(selectedMessage));
    }

    if (currentScreen === "level") {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    if (timer === 0) {
      const newScore = score - 5;
      // Handle async operation outside of useEffect
      const handleTimeout = async () => {
        await updateScoreAndSync(newScore);
        setCurrentScreen('fail');
      };
      handleTimeout();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentScreen]);

  // Modified useHint to update user score
  const useHint = async (index: number) => {
    const hintUsedSound = new Audio(`${hintSound}`);
    hintUsedSound.volume = 0.1;
    hintUsedSound.play();
    
    const updatedHints = [...hintsUsed];
    updatedHints[index] = true;
    setHintsUsed(updatedHints);
    
    if (!hintsUsed[index]) {
      await updateScoreAndSync(score - 5);
    }
    
    setCurrentHint(levels[currentLevel - 1].hints[index].text);
    setIsHintModalOpen(true);
  };

  const submitAnswer = async (answer: string): Promise<boolean> => {
    const correctAnswer = randomMessage.toLowerCase();
    if (answer.toLowerCase() === correctAnswer) {
      setCurrentScreen('success'); 
      const bonusPoints = timer > 30 ? 5 : 0;
      const newScore = score + 10 * currentLevel + bonusPoints;
      await updateScoreAndSync(newScore);
      return true;
    } else {
      setCurrentScreen('fail'); 
      const newScore = score - 5;
      await updateScoreAndSync(newScore);
      return false;
    }
};


  const nextLevel = () => {
    if (currentLevel < levels.length) {
      const nextLevelIndex = currentLevel;
      setCurrentLevel((prevLevel) => prevLevel + 1);
      setHintsUsed([false, false, false]);
      setEncryptedMessage(
        levels[nextLevelIndex].algorithm(levels[nextLevelIndex].messages[0])
      );
      setTimer(60);
    }
  };

  const retryLevel = () => {
    setHintsUsed([false, false, false]);
    setEncryptedMessage(
      levels[currentLevel - 1].algorithm(levels[currentLevel - 1].messages[0])
    );
    setTimer(60);
  };

  const resetGame = async () => {
    setCurrentLevel(1);
    setHintsUsed([false, false, false, false, false, false, false, false, false, false]);
    setTimer(60);
    setEncryptedMessage(levels[0].algorithm(levels[0].messages[0]));
  };

  return {
    score,
    setScore,
    currentLevel,
    setCurrentLevel,
    encryptedMessage,
    setEncryptedMessage,
    hintsUsed,
    setHintsUsed,
    isHintModalOpen,
    setIsHintModalOpen,
    currentHint,
    setCurrentHint,
    timer,
    setTimer,
    currentScreen,
    setCurrentScreen,
    useHint,
    closeHintModal: () => setIsHintModalOpen(false),
    submitAnswer,
    nextLevel,
    retryLevel,
    resetGame,
    userError,
    setUserError,
    showUserError,
    setShowUserError,
    currentUser,
    setCurrentUser,
    initializeUser,
  };
};

import { useState, useEffect } from "react";
import { levels } from "../shared/levels.ts";
import hintSound from "../assets/hint.mp3";

export type Screen =
  | "start"
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
  const [hintsUsed, setHintsUsed] = useState([false, false, false,false, false, false,false, false, false,false]);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [currentHint, setCurrentHint] = useState("");
  const [timer, setTimer] = useState(60);


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
      setScore((prevScore) => prevScore - 5); 
      setCurrentScreen('fail'); 
    }

    return () => {
      if (interval) clearInterval(interval); 
    };
  }, [currentScreen]);


  // Handle hint usage
  const useHint = (index: number) => {
     
      const hintUsedSound = new Audio(`${hintSound}`);
      hintUsedSound.volume = 0.1;
      hintUsedSound.play();
      const updatedHints = [...hintsUsed];
      updatedHints[index] = true;
      setHintsUsed(updatedHints);
      if (!hintsUsed[index])
      setScore((prevScore) => prevScore - 5); 
      setCurrentHint(levels[currentLevel - 1].hints[index].text);
      setIsHintModalOpen(true);
  };

  const closeHintModal = () => {
    setIsHintModalOpen(false);
  };

  // Handle answer submission
  const submitAnswer = (answer: string): boolean => {
    const correctAnswer = randomMessage.toLowerCase();
    if (answer.toLowerCase() === correctAnswer) {
      const bonusPoints = timer > 30 ? 5 : 0; // Bonus points for fast answers
      setScore((prevScore) => prevScore + 10 * currentLevel + bonusPoints);
      return true;
    } else {
      setScore((prevScore) => prevScore - 5); // Deduct 5 points for wrong answers
      return false;
    }
  };

  // Move to the next level
  const nextLevel = () => {
    
    if (currentLevel < levels.length) {
      const nextLevelIndex = currentLevel;
      setCurrentLevel((prevLevel) => prevLevel + 1);
      setHintsUsed([false, false, false]); // Reset hints
      setEncryptedMessage(
        levels[nextLevelIndex].algorithm(levels[nextLevelIndex].messages[0])
      );
      setTimer(60); // Reset timer     
    }
  };

  // Retry the current level
  const retryLevel = () => {
    setHintsUsed([false, false, false]); // Reset hints
    setEncryptedMessage(
      levels[currentLevel - 1].algorithm(
        levels[currentLevel - 1].messages[0]
      )
    );
    setTimer(60); // Reset timer
  };

  const resetGame = () => {
    setScore(0);
    setCurrentLevel(1);
    setHintsUsed([false, false, false,false, false, false,false, false, false,false]);
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
    closeHintModal,
    submitAnswer,
    nextLevel,
    retryLevel,
    resetGame,
  };
};

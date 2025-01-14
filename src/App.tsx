import React from "react";
import LoadingScreen from "./components/LoadingScreen.tsx";
import HomeScreen from "./components/HomeScreen.tsx";
import LeaderboardScreen from './components/LeaderboardScreen.tsx';
import HowToPlayScreen from "./components/HowToPlayScreen.tsx";
import MissionBriefing from "./components/MissionBriefing.tsx";
import GamePlayScreen from "./components/GamePlayScreen.tsx";
import SuccessScreen from "./components/SuccessScreen.tsx";
import FailScreen from "./components/FailScreen.tsx";
import FinalScreen from "./components/FinalScreen.tsx";
import { useGameLogic } from "./hooks/useGameLogic.ts";
import { levels } from "./shared/levels.ts";
import failSound from "./assets/sounds/fail.mp3";
import successSound from "./assets/sounds/level-complete.mp3";
import buttonSound from "./assets/sounds/button-click.mp3";


import "./index.css";

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

const App: React.FC = () => {
  const {
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
  } = useGameLogic();



  const navigateTo = (screen: Screen) => {
    setTimer(60);
    setCurrentScreen(screen);
  };

  const resetAndGoHome = (screen: Screen) => {
    resetGame();
    setCurrentScreen(screen);
  };

  const handleLevelComplete = () => {
    const gameplaySound = new Audio(`${successSound}`);
    gameplaySound.volume = 0.1;
    gameplaySound.play();

    if (currentLevel >= 13) {
      navigateTo("final-loading");
    } else {
      navigateTo("success");
    }
  };

  const handleFail = () => {
    const gameoverSound = new Audio(`${failSound}`);
    gameoverSound.volume = 0.1;
    gameoverSound.play();
    navigateTo("fail");
  };

  return (
    <div className="h-screen font-mono bg-black text-white">
      {currentScreen === "loading" && (
        <LoadingScreen isFinal={false} onComplete={() => navigateTo("missionBriefing")} />
      )}

      {currentScreen === "start" && (
        <HomeScreen
          onStartGame={() => {
            const btnSound = new Audio(`${buttonSound}`);
            btnSound.volume = 0.3;
            btnSound.play();

            navigateTo("loading")
          }
          }
          onHowToPlay={() => navigateTo("howToPlay")}
          onLeaderboard={() => navigateTo('leaderboard')}

        />
      )}

      {currentScreen === "leaderboard" && (
        <LeaderboardScreen
          onBack={() => navigateTo("start")}
          onGoHome={() => resetAndGoHome("start")}
        />
      )}

      {currentScreen === "howToPlay" && (
        <HowToPlayScreen
          onStartGame={() => navigateTo("loading")}
          onGoHome={() => resetAndGoHome("start")}
        />
      )}

      {currentScreen === "missionBriefing" && (
        <MissionBriefing
          missionTitle={levels[currentLevel - 1].missionTitle}
          missionDescription={levels[currentLevel - 1].missionDescription}
          onStartLevel={() => navigateTo("level")}
          onGoHome={() => resetAndGoHome("start")}
        />
      )}

      {currentScreen === "level" && (
        <GamePlayScreen
          onGoHome={() => resetAndGoHome("start")}
          onLevelComplete={handleLevelComplete}
          onFail={handleFail}
          score={score}
          timer={timer}
          currentLevel={currentLevel}
          encryptedMessage={encryptedMessage}
          hintsUsed={hintsUsed}
          isHintModalOpen={isHintModalOpen}
          currentHint={currentHint}
          useHint={useHint}
          closeHintModal={closeHintModal}
          submitAnswer={submitAnswer}
        />
      )}

      {currentScreen === "success" && (
        <SuccessScreen
          score={score}
          currentLevel={currentLevel}
          onNextLevel={() => {
            nextLevel();
            navigateTo("missionBriefing");
          }}
          onGoHome={() => resetAndGoHome("start")}
        />
      )}

      {currentScreen === "fail" && (
        <FailScreen
          score={score}
          currentLevel={currentLevel}
          isTimeout={timer === 0}
          onRetry={() => {
            retryLevel();
            navigateTo("level");
          }}
          onGoHome={() => resetAndGoHome("start")}
        />
      )}


      {currentScreen === "final-loading" && (
        <LoadingScreen isFinal={true} onComplete={() => navigateTo("final")} />
      )}

      {currentScreen === "final" && (
        <FinalScreen
          score={score}
          onPlayAgain={() => resetAndGoHome("start")}
        />
      )}
    </div>
  );
};

export default App;

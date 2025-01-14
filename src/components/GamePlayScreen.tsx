import React, { useState } from "react";
import HintImage from "./HintImage.tsx";
import InputForm from "./InputForm.tsx";
import HintModal from "./HintModal.tsx";
import { levels } from "../shared/levels.ts";
import ButtonWithSound from "./ButtonWithSound.tsx";

interface GamePlayScreenProps {
  onGoHome: () => void;
  onLevelComplete: (score: number) => void;
  onFail: (score: number, isTimeout: boolean) => void;
  score: number;
  timer: number;
  currentLevel: number;
  encryptedMessage: string;
  hintsUsed: [];
  isHintModalOpen: boolean;
  currentHint: string;
  useHint: (index: number) => void;
  closeHintModal: () => void;
  submitAnswer: (answer: string) => boolean;
}

const GamePlayScreen: React.FC<GamePlayScreenProps> = ({
  onGoHome,
  onLevelComplete,
  onFail,
  score,
  timer,
  currentLevel,
  encryptedMessage,
  hintsUsed,
  isHintModalOpen,
  currentHint,
  useHint,
  closeHintModal,
  submitAnswer,
}) => {
  const levelData = levels[currentLevel - 1];

  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);

  const toggleHowToPlay = () => {
    setIsHowToPlayOpen((prev) => !prev);
  };


  React.useEffect(() => {
    if (timer === 0) {
      onFail(score - 5, true); // Deduct points and mark as timeout
    }
  }, [timer, onFail, score]);

  const handleAnswerSubmit = (answer: string) => {
    const isCorrect = submitAnswer(answer);
    if (isCorrect) {
      onLevelComplete(score);
    } else {
      onFail(score - 5, false);
    }
  };

  return (
    <div className="h-screen bg-black text-white font-mono">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-900">

        <div className="flex items-center space-x-10">
          <div className="flex items-center text-yellow-500 text-xl">
            <svg
              className="mr-2"
              width="20px"
              height="20px"
              fill="#eab308"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M357.542 0H1562.46V119.181H1920V542.868C1920 655.236 1875.36 763.003 1795.91 842.46C1731.12 907.242 1647.52 948.879 1557.95 962.049C1544.78 1051.62 1503.15 1135.22 1438.36 1200C1360.45 1277.91 1255.32 1322.35 1145.33 1324.05V1496.31C1145.33 1510.38 1150.91 1523.87 1160.86 1533.81C1170.81 1543.76 1184.3 1549.35 1198.36 1549.35C1263.32 1549.35 1325.61 1575.15 1371.54 1621.08C1417.47 1667.01 1443.28 1729.31 1443.28 1794.26V1920H476.723V1794.26C476.723 1729.31 502.528 1667.01 548.458 1621.08C594.388 1575.15 656.682 1549.35 721.639 1549.35C735.705 1549.35 749.195 1543.76 759.14 1533.81C769.086 1523.87 774.674 1510.38 774.674 1496.31V1324.05C664.677 1322.35 559.547 1277.91 481.637 1200C416.854 1135.22 375.218 1051.62 362.048 962.049C272.477 948.879 188.877 907.242 124.095 842.46C44.6379 763.003 0 655.236 0 542.868V119.181H357.542V0ZM357.542 251.471H132.29V542.868C132.29 620.151 162.991 694.269 217.638 748.917C256.412 787.69 304.988 814.409 357.542 826.659V251.471ZM1562.46 826.659V251.471H1787.71V542.868C1787.71 620.151 1757.01 694.269 1702.36 748.917C1663.59 787.69 1615.01 814.409 1562.46 826.659ZM959.198 320L1034.59 564.21H1280L1081.1 715.79L1159.7 960L960.801 808.422L761.906 960L838.898 714.104L640 562.527H885.413L959.198 320Z"
              />
            </svg>
            {score}
          </div>
          <div className="flex items-center text-red-500 text-xl">
            <svg
              className="mr-2"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="#ef4444"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                fill="white"
              />
            </svg>
            {timer}
          </div>
        </div>
        <h2 className="text-lg font-bold text-gray-300 invisible md:visible">
          <span className="text-gray-400">Mission {currentLevel}: {levelData.missionTitle}</span>
        </h2>

        <div className="flex align-middle gap-4">
          <ButtonWithSound
            className="text-green-500 text-2xl hover:text-green-400"
            onClick={toggleHowToPlay}
          >
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#dfe83a" />
            </svg>
          </ButtonWithSound>

          <ButtonWithSound
            className="text-green-500 text-2xl hover:text-green-400"
            onClick={onGoHome}
          >
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#ff7777" />
            </svg>
          </ButtonWithSound>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-6 justify-around ps-10 pe-10">
        <div className="text-left">
          <p className="text-green-400">Decode this to {levelData.missionTitle.toLocaleLowerCase()}</p>
          <p className={`animate-pulse-light tracking-widest font-bold text-yellow-200 ${currentLevel < 13 ? "text-4xl" : "text-8xl"}`}>
            {encryptedMessage}
          </p>
        </div>
        <InputForm onSubmit={handleAnswerSubmit} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto mt-10">

        <div className="w-[500px] h-[500px] border-4 border-[#194a53] mx-auto">
          <HintImage
            backgroundImage={levelData.backgroundImage}
            onUseHint={useHint}
            hintsUsed={hintsUsed}
            hints={levelData.hints}
          />
        </div>

        <div className="w-[500px] h-[500px] mx-auto border-4 border-[#194a53] bg-black content-center p-5">
          <p className="text-green-400 text-center text-xl">{levelData.missionHintText}</p>
          <p className="text-green-400 text-center font-bold text-xl mt-10">Hover your cursor over the image to find the hints, click to unlock.</p>
        </div>

      </div>




      {isHintModalOpen && (
        <HintModal
          currentHint={currentHint}
          closeModal={closeHintModal}
        />
      )}

      {isHowToPlayOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-gray-900 text-white p-6 rounded-lg w-3/4 max-w-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4 ">
              How to Play
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>
                <strong>Decode the Message:</strong> Solve the encrypted
                message within 60 seconds.
              </li>
              <li>
                <strong>Hints:</strong> Hover over the image to find the hints, click to unlock.
              </li>
              <li>
                <strong>Scoring:</strong> Answer correctly to earn points
                (10 × Level). Solve within 30 seconds for 5 bonus points.
              </li>

              <li>
                <strong>Penalty:</strong> Wrong Answer or using hints deducts 5 points.
              </li>

              <li>
                <strong>Retry:</strong> You can retry on timeup or wrong answer. But the enemies might change the code on retry.
              </li>

            </ul>
            <button
              onClick={toggleHowToPlay}
              className="mx-auto mt-4 px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
            >
              Continue Playing
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default GamePlayScreen;

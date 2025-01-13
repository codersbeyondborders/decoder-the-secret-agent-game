import React from "react";
import failImg from "../assets/fail.png";
import ButtonWithSound from "./ButtonWithSound.tsx";

interface FailScreenProps {
  score: number;
  currentLevel: number;
  isTimeout: boolean;
  onRetry: () => void;
  onGoHome: () => void;
}

const FailScreen: React.FC<FailScreenProps> = ({
  score,
  currentLevel,
  isTimeout,
  onRetry,
  onGoHome,
}) => {
  return (
    <div className="h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-5">
            <div className="w-3/4 pb-8 flex flex-col items-center justify-center p-5 bg-black border-4 border-[#194a53] rounded-md shadow-lg">

      <h1 className="text-4xl font-bold text-red-500 mb-4">
        {isTimeout ? "Time's Up!" : "Mission Failed"}
      </h1>
      <p className="text-xl mb-6 text-center">
        {isTimeout
          ? "You ran out of time! Better luck next time."
          : "Try again to decode the secret message within 60 seconds!"}
      </p>
      <p className="text-lg text-yellow-500 mb-2">
        Your Score: <span className="font-bold">{score}</span>
      </p>

      <div className="my-6">
              <img
                src={failImg}
                alt="Detective"
                className="w-40"
              />
            </div>

            <div className="flex space-x-8">
      <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-gray-800 text-green-300 rounded-md text-lg font-normal hover:bg-green-300 hover:text-gray-800 transition duration-300 border-4 border-[#194a53]"
            onClick={onRetry}
      >
        Retry
      </ButtonWithSound>
      <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-green-300 text-gray-800 rounded-md text-lg font-normal hover:bg-gray-800  hover:text-green-300  transition duration-300 border-4 border-[#194a53]"
            onClick={onGoHome}
      >
        Quit
      </ButtonWithSound></div>
    </div>
    </div>
  );
};

export default FailScreen;

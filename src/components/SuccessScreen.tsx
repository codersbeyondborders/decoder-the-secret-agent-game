import React from "react";
import ButtonWithSound from "./ButtonWithSound.tsx";
import successImg from "../assets/images/success.png";

interface SuccessScreenProps {
  score: number;
  currentLevel: number;
  onNextLevel: () => void;
  onGoHome: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  score,
  currentLevel,
  onNextLevel,
  onGoHome,
}) => {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-3/4 pb-8 flex flex-col items-center justify-center p-5 bg-black border-4 border-[#194a53] rounded-md shadow-lg">

        <h1 className="text-5xl font-bold mb-4 text-green-400 ">Level Complete!</h1>
        <p className="text-2xl mb-4">Great work, Agent!</p>
        <p className="text-xl mb-2">Your Score: {score}</p>
        <div className="my-6">
          <img
            src={successImg}
            alt="Detective"
            className="w-40"
          />
        </div>

        <div className="flex space-x-8">
          <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-gray-800 text-green-300 rounded-md text-lg font-normal hover:bg-green-300 hover:text-gray-800 transition duration-300 border-4 border-[#194a53]"
            onClick={onNextLevel}
          >
            {currentLevel === 13 ? "View Credits" : "Next Level"}
          </ButtonWithSound>
          <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-green-300 text-gray-800 rounded-md text-lg font-normal hover:bg-gray-800  hover:text-green-300  transition duration-300 border-4 border-[#194a53]"
            onClick={onGoHome}
          >
            Quit
          </ButtonWithSound>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;

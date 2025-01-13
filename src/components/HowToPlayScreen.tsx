import React from "react";
import ButtonWithSound from "./ButtonWithSound.tsx";

interface HowToPlayScreenProps {
  onStartGame: () => void;
  onGoHome: () => void;
}

const HowToPlayScreen: React.FC<HowToPlayScreenProps> = ({ onStartGame, onGoHome }) => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
      <div className="w-3/4 pb-4 bg-black border-4 border-[#194a53] rounded-md shadow-lg">

        <div className="text-center mb-8">
          <h1 className="text-xl p-2 text-white bg-[#194a53]" style={{ fontFamily: "monospace" }}>
            HOW TO PLAY
          </h1>
        </div>

        <div className="text-lg leading-8 text-white mb-4 p-6">
          <p><span className="text-green-400 font-bold">1. Decode Messages:</span> Solve encrypted messages to stop the bad guys!</p>
          <p><span className="text-green-400 font-bold">2. Explore Clues:</span> Use the image given to find hints and solve the mission. Hover and Click to unlock.</p>
          <p><span className="text-green-400 font-bold">3. Hints:</span> Costs 5 points per hint but helps to find the secret faster.</p>
          <p><span className="text-green-400 font-bold">4. Timer:</span> Solve within <strong>60 seconds</strong>. Earn <strong>+5 bonus</strong> for solving in under 30 seconds.</p>
          <p><span className="text-green-400 font-bold">5. Scoring:</span> <strong>+10 × Level Number</strong> Points for correct answers. Lose <strong>5 points</strong> for wrong answer.</p>
          <p><span className="text-green-400 font-bold">6. Retry:</span> You can retry on timeup or wrong answer. But the enemies might change the code on retry.</p>

        </div>

        
        <div className="flex space-x-8 justify-center mb-5">
        <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-gray-800 text-green-300 rounded-md text-lg font-normal hover:bg-green-300 hover:text-gray-800 transition duration-300 border-4 border-[#194a53]"
            onClick={onStartGame}
        >
         Start
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

export default HowToPlayScreen;

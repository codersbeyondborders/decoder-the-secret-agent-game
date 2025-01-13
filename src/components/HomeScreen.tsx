import React from "react";
import homeImg from "../assets/images/start.png";
import ButtonWithSound from "./ButtonWithSound.tsx";

interface HomeScreenProps {
  onStartGame: () => void;
  onHowToPlay: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStartGame, onHowToPlay }) => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
      {/* Terminal Screen Effect */}
      <div className="w-3/4 pb-8 bg-black border-4 border-[#194a53] rounded-md shadow-lg">
        <div className="text-center">
          <p className="text-xl p-4 text-white tracking-wide bg-[#194a53]"></p>
          <h1 className="text-6xl font-extrabold text-green-200 mt-10 animate-pulse" style={{ fontFamily: "monospace" }}>
            DECODER
          </h1>
          <h2 className="text-2xl animate-pulse font-normal text-green-400 mt-2" style={{ fontFamily: "monospace" }}>
            The Secret Agent
          </h2>
        </div>

        <div className="my-4">
          <img
            src={homeImg}
            alt="Detective"
            className="w-40 mx-auto"
          />
        </div>

        <p className="p-4 text-center mx-auto text-green-400">Decode encrypted messages, expose the bad guys, and change the fate of the world!</p>


        {/* Buttons */}
        <div className="flex flex-col items-center space-y-6">
          <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-gray-800 text-green-300 rounded-md text-lg font-normal hover:bg-green-300 hover:text-gray-800 transition duration-300 border-4 border-[#194a53]"
            onClick={onStartGame}
          >
            Play Now
          </ButtonWithSound>
          <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-green-300 text-gray-800 rounded-md text-lg font-normal hover:bg-gray-800  hover:text-green-300  transition duration-300 border-4 border-[#194a53]"
            onClick={onHowToPlay}
          >
            How to Play
          </ButtonWithSound>
        </div>
      </div>

    </div>
  );
};

export default HomeScreen;

import React, { useState } from "react";
import homeImg from "../assets/images/start.png";
import ButtonWithSound from "./ButtonWithSound.tsx";

interface HomeScreenProps {
  onStartGame: () => void;
  onHowToPlay: () => void;
  onLeaderboard: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ 
  onStartGame, 
  onHowToPlay,
  onLeaderboard 
}) => {
  const [username, setUsername] = useState<string>("");
  const [showError, setShowError] = useState(false);

  const handleStartGame = () => {
    if (!username.trim()) {
      setShowError(true);
      // Auto-hide error after 3 seconds
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    setShowError(false);
    onStartGame();
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (showError) setShowError(false);
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
      {/* Terminal Screen Effect */}
      <div className="w-3/4 pb-8 bg-black border-4 border-[#194a53] rounded-md shadow-lg">
        <div className="text-center">
          <p className="text-xl p-4 text-white tracking-wide bg-[#194a53]"></p>
          
          <div className="flex flex-row items-center m-4 justify-between">
          <ButtonWithSound
            className="ring-2 ring-green-300 w-40 px-4 py-2 bg-black text-green-300 
            rounded-md text-sm font-normal hover:bg-green-300 hover:text-gray-800 
            transition duration-300 border-4 border-[#194a53]"
            onClick={onHowToPlay}
          >
            <span className="flex items-center">
              <svg className="mr-2" width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#194a53"/>
              </svg>
              <span className="w-40">How to Play</span>
            </span>
          </ButtonWithSound>

          <ButtonWithSound
            className="ring-2 ring-green-300 w-40 px-4 py-2 bg-black text-green-300 
                     rounded-md text-sm font-normal hover:bg-green-300 hover:text-gray-800 
                     transition duration-300 border-4 border-[#194a53]"
            onClick={onLeaderboard}
          >
            <span className="flex items-center">
            <svg
              className="mr-2"
              width="24px"
              height="24px"
              fill="#194a53"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M357.542 0H1562.46V119.181H1920V542.868C1920 655.236 1875.36 763.003 1795.91 842.46C1731.12 907.242 1647.52 948.879 1557.95 962.049C1544.78 1051.62 1503.15 1135.22 1438.36 1200C1360.45 1277.91 1255.32 1322.35 1145.33 1324.05V1496.31C1145.33 1510.38 1150.91 1523.87 1160.86 1533.81C1170.81 1543.76 1184.3 1549.35 1198.36 1549.35C1263.32 1549.35 1325.61 1575.15 1371.54 1621.08C1417.47 1667.01 1443.28 1729.31 1443.28 1794.26V1920H476.723V1794.26C476.723 1729.31 502.528 1667.01 548.458 1621.08C594.388 1575.15 656.682 1549.35 721.639 1549.35C735.705 1549.35 749.195 1543.76 759.14 1533.81C769.086 1523.87 774.674 1510.38 774.674 1496.31V1324.05C664.677 1322.35 559.547 1277.91 481.637 1200C416.854 1135.22 375.218 1051.62 362.048 962.049C272.477 948.879 188.877 907.242 124.095 842.46C44.6379 763.003 0 655.236 0 542.868V119.181H357.542V0ZM357.542 251.471H132.29V542.868C132.29 620.151 162.991 694.269 217.638 748.917C256.412 787.69 304.988 814.409 357.542 826.659V251.471ZM1562.46 826.659V251.471H1787.71V542.868C1787.71 620.151 1757.01 694.269 1702.36 748.917C1663.59 787.69 1615.01 814.409 1562.46 826.659ZM959.198 320L1034.59 564.21H1280L1081.1 715.79L1159.7 960L960.801 808.422L761.906 960L838.898 714.104L640 562.527H885.413L959.198 320Z"
              />
            </svg>
            <span className="w-40">Leaderboard</span>
            </span>
          </ButtonWithSound>
        </div>

          <h1 
            className="text-6xl font-extrabold text-green-200 mt-10 animate-pulse" 
            style={{ fontFamily: "monospace" }}
          >
            DECODER
          </h1>
          <h2 
            className="text-2xl animate-pulse font-normal text-green-400 mt-2" 
            style={{ fontFamily: "monospace" }}
          >
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

        <p className="p-4 text-center mx-auto text-green-400">
          Decode encrypted messages, expose the bad guys, and change the fate of the world!
        </p>

        {/* Username Input with Error Message */}
        <div className="flex flex-row items-center space-x-4 justify-center mb-10">
          <div>
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter your unique agent ID or create one"
            className={`w-96 p-4 text-lg bg-gray-800 text-green-300 border-2 
                     ${showError ? 'border-red-500' : 'border-green-300'} 
                     rounded-md focus:outline-none focus:ring-2 
                     focus:ring-green-400 focus:border-transparent
                     placeholder-green-600`}
            maxLength={20}
          />
          </div>
          <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-green-300 text-gray-800 
            rounded-md text-lg font-normal hover:bg-gray-800 hover:text-green-300 
            transition duration-300 border-4 border-[#194a53]"
            onClick={handleStartGame}
          >
            Play Now
          </ButtonWithSound>
        </div>
        {/* Error Message */}
        {showError && (
            <div className="text-center">
              <div className="animate-pulse">
                <span className="text-red-500 font-bold">[ERROR]</span>{" "}
                <span className="text-red-400">
                AGENT NAME REQUIRED
                </span>
              </div>
              
            </div>
          )}
      </div>
    </div>
  );
};

export default HomeScreen;
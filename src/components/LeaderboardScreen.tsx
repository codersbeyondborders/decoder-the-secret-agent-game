import React from 'react';
import ButtonWithSound from './ButtonWithSound.tsx';

interface LeaderboardScreenProps {
  onBack: () => void;
}

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onBack }) => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
      <div className="w-3/4 pb-8 bg-black border-4 border-[#194a53] rounded-md shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-200 mt-6 mb-8">
            Leaderboard
          </h1>
          
          {/* Placeholder for leaderboard data */}
          <div className="mx-auto w-3/4 mb-8">
            <div className="bg-gray-800 p-4 rounded-md">
              <p className="text-green-300">Coming Soon...</p>
            </div>
          </div>

          <ButtonWithSound
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-gray-800 text-green-300 
                     rounded-md text-lg font-normal hover:bg-green-300 hover:text-gray-800 
                     transition duration-300 border-4 border-[#194a53]"
            onClick={onBack}
          >
            Back
          </ButtonWithSound>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;

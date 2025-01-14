import React, { useState, useEffect } from 'react';
import ButtonWithSound from './ButtonWithSound.tsx';
import { ScoreboardManager } from '../utils/scoreboard.ts';

interface LeaderboardEntry {
  username: string;
  score: number;
  rank: number;
}

interface LeaderboardScreenProps {
  onBack: () => void;
}

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onBack }) => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const scores = await ScoreboardManager.getTopScores(10);
        const formattedScores = scores.map((score, index) => ({
          username: score.userID,
          score: score.score,
          rank: index + 1
        }));
        setLeaderboardData(formattedScores);
      } catch (err) {
        console.error('Error fetching leaderboard data:', err);
        setError('Failed to load leaderboard data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
      <div className="w-3/4 pb-8 bg-black border-4 border-[#194a53] rounded-md shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-200 mt-6 mb-8">
          <span className="flex items-center justify-center">
          <svg
              className="mr-2"
              width="28px"
              height="28px"
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
                <span className="">Leaderboard</span>
              </span>
          </h1>

          <div className="mx-auto w-3/4 mb-8">
            <div className="bg-gray-800 p-4 rounded-md">
              {/* Header */}
              <div className="grid grid-cols-3 mb-4 text-green-300 border-b border-green-300/30 pb-2">
                <div className="text-left">Rank</div>
                <div className="text-left">Agent</div>
                <div className="text-right">Score</div>
              </div>

              {/* Leaderboard entries */}
              {isLoading ? (
                <div className="text-center py-4 text-green-200">Loading...</div>
              ) : error ? (
                <div className="text-center py-4 text-red-400">{error}</div>
              ) : leaderboardData.length === 0 ? (
                <div className="text-center py-4 text-green-200">No scores yet</div>
              ) : (
                leaderboardData.map((entry) => (
                  <div 
                    key={entry.rank}
                    className="grid grid-cols-3 py-2 hover:bg-gray-700 transition-colors"
                  >
                    <div className="text-left text-green-200">#{entry.rank}</div>
                    <div className="text-left text-green-200">{entry.username}</div>
                    <div className="text-right text-green-200">{entry.score}</div>
                  </div>
                ))
              )}
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

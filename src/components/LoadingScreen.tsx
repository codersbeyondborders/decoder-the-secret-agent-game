import React, { useEffect, useState } from "react";


interface LoadingScreenProps {
  isFinal: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isFinal, onComplete }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(); // Trigger callback when loading is complete
          return 100;
        }
        return prev + 5; // Increase progress incrementally
      });
    }, 100); // Update progress every 200ms

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white font-mono">
      <h1 className="text-2xl font-bold mb-4 text-green-500">
        {isFinal ? 'Finalizing Mission...' : 'Initializing Mission...'}
      </h1>
      <div className="w-3/4 bg-gray-700 rounded-full h-6 overflow-hidden">
        <div
          className="bg-green-600 h-full text-center text-white text-sm flex items-center justify-center transition-all duration-300"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        {isFinal ? 'Closing all enemy activities.... Please wait..' : 'Scanning for enemy codes.... Please wait.'}
      </p>
    </div>
  );
};

export default LoadingScreen;

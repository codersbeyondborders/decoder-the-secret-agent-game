import React from "react";

interface HelpModalProps {
  closeHelpModal: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ closeHelpModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={closeHelpModal}
    >
      <div
        className="hint-modal relative bg-gradient-to-br from-gray-800 to-black text-white p-6 rounded-xl shadow-lg w-80 sm:w-96 border-4 border-green-500 scale-0 animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg sm:text-2xl text-green-400 font-bold mb-4 animate-pulse">
          How to Play
        </h2>

        <button
          onClick={closeHelpModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#4ade80" />
          </svg>
        </button>
        <div className="mt-4">


          <div className="text-xs leading-8 text-white mb-4 p-2">
            <p><span className="text-green-400 font-bold">1. Decode Messages:</span> Solve encrypted messages to stop the bad guys!</p>
            <p><span className="text-green-400 font-bold">2. Explore Clues:</span> Use the image given to find hints and solve the mission.</p>
            <p><span className="text-green-400 font-bold">3. Hints:</span> Costs 5 points per hint but helps to find the secret faster.</p>
            <p><span className="text-green-400 font-bold">4. Timer:</span> Solve within <strong>60 seconds</strong>. Earn <strong>+5 bonus</strong> for solving in under 30 seconds.</p>
            <p><span className="text-green-400 font-bold">5. Scoring:</span> <strong>+10 × Level Number</strong> Points for correct answers. Lose <strong>5 points</strong> for wrong answer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;

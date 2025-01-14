import React, { useEffect, useState } from "react";
import ButtonWithSound from "./ButtonWithSound.tsx";
import typingSound from "../assets/sounds/typing.mp3";
interface MissionBriefingProps {
  missionTitle: string;
  missionDescription: string;
  onStartLevel: () => void;
  onGoHome: () => void;
}

const MissionBriefing: React.FC<MissionBriefingProps> = ({
  missionTitle,
  missionDescription,
  onStartLevel,
  onGoHome,
}) => {
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 50; // Speed in ms for each character

  useEffect(() => {
    let currentCharIndex = 0;
    const audio = new Audio(typingSound);

    const typeText = () => {
      if (currentCharIndex <= missionDescription.length) {
        // Safely update the typedText state with the substring
        setTypedText(missionDescription.substring(0, currentCharIndex + 1));
        currentCharIndex++;

        if (audio.paused) {
          audio.play().catch(() => null); // Handle autoplay restrictions gracefully
        }
      } else {
        clearInterval(typingInterval);
        audio.pause();
        audio.currentTime = 0; // Reset sound
      }
    };

    const typingInterval = setInterval(typeText, typingSpeed);

    // Cleanup function for component unmount
    return () => {
      clearInterval(typingInterval);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [missionDescription]);

  return (
    <div className="h-screen bg-black text-white font-mono flex flex-col items-center justify-center">
      <div className="w-3/4 min-h-[400px] pb-8 flex flex-col items-center justify-center p-2 bg-black border-4 border-[#194a53] rounded-md shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-green-500 mx-auto">{missionTitle}</h1>

        <div className="text-lg text-gray-300 mt-4 text-center  mx-auto">
          {typedText}
        </div>

        <div className="text-lg text-green-300 mt-4 text-center  mx-auto">
          You have only 60 seconds to decode the secret and save the day.
        </div>

        <div className="flex space-x-8 mt-6 items-center justify-center">
          <ButtonWithSound
            onClick={onStartLevel}
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-gray-800 text-green-300 rounded-md text-lg font-normal hover:bg-green-300 hover:text-gray-800 transition duration-300 border-4 border-[#194a53]"
            
          >
            Start Now
          </ButtonWithSound>

          <ButtonWithSound
            onClick={onGoHome}
            className="ring-2 ring-green-300 w-48 px-6 py-3 bg-green-300 text-gray-800 rounded-md text-lg font-normal hover:bg-gray-800  hover:text-green-300  transition duration-300 border-4 border-[#194a53]"
            
         >
            Quit
          </ButtonWithSound>
        </div>
      </div>
    </div>
  );
};

export default MissionBriefing;

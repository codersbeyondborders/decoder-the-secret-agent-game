import React, { ReactNode } from "react";
import clickSound from "../assets/button-click.mp3";

interface ButtonWithSoundProps {
  children: ReactNode; // For the button text or child elements
  onClick: () => void; // The button's click handler
  className?: string; // Optional additional styles
}

const ButtonWithSound: React.FC<ButtonWithSoundProps> = ({ children, onClick, className }) => {
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleClick = () => {
    playSound(); // Play the sound
    onClick(); // Execute the button's click handler
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonWithSound;

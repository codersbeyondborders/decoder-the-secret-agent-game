import React, { ReactNode } from "react";
import btnSound from "../assets/sounds/button-click.mp3";

interface ButtonWithSoundProps {
  children: ReactNode; // For the button text or child elements
  onClick: () => void; // The button's click handler
  className?: string; // Optional additional styles
}

const ButtonWithSound: React.FC<ButtonWithSoundProps> = ({ children, onClick, className }) => {
  const playSound = () => {
    const buttonSound = new Audio(btnSound);
    buttonSound.play();
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

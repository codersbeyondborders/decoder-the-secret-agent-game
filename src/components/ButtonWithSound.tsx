import React, { ReactNode } from "react";
import clickSound from "../assets/sounds/button-click.mp3";

interface ButtonWithSoundProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonWithSound: React.FC<ButtonWithSoundProps> = ({
  children,
  onClick,
  className,
  ariaLabel,
  disabled = false,
  type = 'button',
  soundEnabled = true,
}) => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    // Preload audio for better performance
    audioRef.current = new Audio(clickSound);
  }, []);

  const playSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    playSound();
    onClick();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonWithSound;

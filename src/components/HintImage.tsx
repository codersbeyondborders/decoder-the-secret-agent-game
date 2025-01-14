import React from "react";

interface HintImageProps {
  backgroundImage: string;
  onUseHint: (index: number) => void;
  hintsUsed: boolean[];
  hints: { text: string; coordinates: { top: string; left: string; width: string; height: string } }[];
}

const HintImage: React.FC<HintImageProps> = ({ backgroundImage, onUseHint, hintsUsed, hints }) => {
  return (
    <div
      className="relative bg-cover bg-center shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hints.map((hint, index) =>

        <div
          key={index}
          className="absolute cursor-help	"
          style={{
            top: hint.coordinates.top,
            left: hint.coordinates.left,
            width: hint.coordinates.width,
            height: hint.coordinates.height,
          }}
          onClick={() => onUseHint(index)}
          title={hint.text}
        />

      )}
    </div>
  );
};

export default HintImage;

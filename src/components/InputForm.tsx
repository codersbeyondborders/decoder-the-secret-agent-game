import React, { useState } from "react";

interface InputFormProps {
  onSubmit: (answer: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input.trim().toLowerCase());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 md:mt-0">
      {/* <label htmlFor="input" className="text-green-400">
        Enter the decoded message to complete the mission:
      </label> */}
      <div className="flex space-x-4 mt-2">
      <input
        type="text"
        placeholder="Type the decoded message here"
        className="p-3 border-2 border-gray-600 rounded bg-gray-800 text-white w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="ring-2 ring-green-300 w-48 px-6 py-3 bg-green-300 text-gray-800 rounded-md text-lg font-normal hover:bg-gray-800  hover:text-green-300  transition duration-300 border-4 border-[#194a53]"
        >
        Go!
      </button>
      </div>
    </form>
  );
};

export default InputForm;

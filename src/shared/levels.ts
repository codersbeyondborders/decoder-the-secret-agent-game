import level1Image from "../assets/images/level1.webp";
import level2Image from "../assets/images/level2.webp";
import level3Image from "../assets/images/level3.webp";
import level4Image from "../assets/images/level4.webp";
import level5Image from "../assets/images/level5.webp";
import level6Image from "../assets/images/level6.webp";
import level7Image from "../assets/images/level7.webp";
import level8Image from "../assets/images/level8.webp";
import level9Image from "../assets/images/level9.webp";
import level10Image from "../assets/images/level10.webp";
import level11Image from "../assets/images/level11.webp";
import level12Image from "../assets/images/level12.webp";
import level13Image from "../assets/images/level13.webp";

export const levels = [
  {
    name: "Missing Vowels",
    missionTitle: "Defuse the Bomb",
    missionDescription: "The city is in grave danger! A powerful bomb has been planted, and its detonation is imminent. To prevent this catastrophe, you must decipher a secret code. This hidden message holds the crucial information needed to disarm the bomb and save countless lives.",
    missionHintText: "Our intel suggests this room was where the culprits planned the bomb plant. Every detail might hold a clue — look carefully.",
    algorithm: (message: string) => {
      return missingVowelsCipher(message);
    },
    messages: ["hacker", "virus", "computer", "server", "encode"],
    hints: [
      { text: "Replace * with vowels (A, E, I, O, U).", coordinates: { top: "55%", left: "45%", width: "10%", height: "10%" } },
      { text: "Think of missing sounds.", coordinates: { top: "40%", left: "0%", width: "20%", height: "20%" } },
      { text: "Focus on vowels only.", coordinates: { top: "35%", left: "60%", width: "25%", height: "25%" } },
    ],
    background: "bg-gray-900",
    backgroundImage: level1Image,
  },
  {
    name: "Reversed Word",
    missionTitle: "Save the Plane Hijack",
    missionDescription: "Our Agents intercepted a secret message related to an imminent plane hijacking. This message is encoded, meaning it's written in a special way that hides its true meaning. To prevent this dangerous event from happening, you must decipher the code.",
    missionHintText: "Agents intercepted whispers that a crucial message was left here about a plane hijack. This room hides the conspiracy. Look out!",
    algorithm: (message: string) => {
      return reverseWordCipher(message);
    },
    messages: ["transport", "reversal", "engine", "station", "shelter"],
    hints: [
      { text: "Read the word backward.", coordinates: { top: "5%", left: "5%", width: "15%", height: "30%" } },
      { text: "Reverse all letters in sequence.", coordinates: { top: "10%", left: "85%", width: "15%", height: "20%" } },
      { text: "Flip the word to decode it.", coordinates: { top: "35%", left: "65%", width: "20%", height: "20%" } },
    ],
    background: "bg-blue-900",
    backgroundImage: level2Image,
  },
  {
    name: "Swapped with Letter Before",
    missionTitle: "Reveal War Secrets",
    missionDescription: "The fate of long-forgotten wartime secrets rests within a hidden code. Solve it to unlock the bunker's war secrets.",
    missionHintText: "Surveillance footage shows the enemy used this bunker to conceal critical information. Find the concealed information.",
    algorithm: (message: string) => caeserCipher(message),
    messages: ["surveillance", "tracking", "monitoring", "infiltration", "observation"],
    hints: [
      { text: "Shift each letter backward by one.", coordinates: { top: "65%", left: "30%", width: "30%", height: "10%" } },
      { text: "B becomes A, C becomes B, and so on.", coordinates: { top: "50%", left: "5%", width: "25%", height: "20%" } },
      { text: "Reverse the shift.", coordinates: { top: "70%", left: "60%", width: "30%", height: "10%" } },
    ],
    background: "bg-green-800",
    backgroundImage: level3Image,
  },
  {
    name: "Swapped Letters",
    missionTitle: "Stop the Bank Heist",
    missionDescription: "A bank heist was planned in an abandoned factory. To thwart the bank robbery, you must decipher a secret message concealed within the factory.",
    missionHintText: "This factory produced more than machines. Every detail within this factory could hold a crucial piece of the puzzle.",
    algorithm: (message: string) => {
      return swappedLettersCipher(message);
    },
    messages: ["bombings", "explosions", "strategy", "communication", "satellites"],
    hints: [
      { text: "Swap every two letters to reveal the message.", coordinates: { top: "90%", left: "85%", width: "10%", height: "10%" } },
      { text: "Look for patterns in swapped characters.", coordinates: { top: "45%", left: "0%", width: "20%", height: "20%" } },
      { text: "The logic is based on Caeser Cipher.", coordinates: { top: "45%", left: "80%", width: "25%", height: "15%" } },
    ],
    background: "bg-black",
    backgroundImage: level4Image,  
  },
  {
    name: "A is 1, B is 2...",
    missionTitle: "Unlock the Vessel Secrets",
    missionDescription: "To unravel the mysteries of the long-lost shipwreck, you must first decipher the hidden message. This encoded message acts as a key, unlocking the shipwreck's secrets.",
    missionHintText: "Divers discovered signs of suspicious activity on this wreck. Hidden in its depths is the key to solving the mystery.",
    algorithm: (message: string): string => alphaToNumCipher(message),
    messages: ["dockyard", "harbor", "vessel", "submarine", "cargo", "pirates"],
    hints: [
      { text: "Convert letters to numbers (A=1, B=2).", coordinates: { top: "93%", left: "60%", width: "5%", height: "5%" } },
      { text: "Focus on alphabet positions.", coordinates: { top: "45%", left: "15%", width: "20%", height: "20%" } },
      { text: "Use numeric positions for each letter.", coordinates: { top: "25%", left: "5%", width: "15%", height: "15%" } },
    ],
    background: "bg-yellow-600",
    backgroundImage: level5Image,
  },
  {
    name: "QWERTY",
    missionTitle: "Identify the Traitor",
    missionDescription: "To identify the traitor within your ranks, you must decode a cipher text.",
    missionHintText: "Legends say this library was once a meeting place for those guarding forbidden knowledge. What they left behind is yours to find.",
    algorithm: (message: string): string => qwertyCipher(message),
    messages: ["henry", "william", "george", "charles", "oliver"],
    hints: [
      { text: "Map letters to QWERTY equivalents.", coordinates: { top: "15%", left: "20%", width: "10%", height: "10%" } },
      { text: "A becomes Q, B becomes W, and so on.", coordinates: { top: "40%", left: "60%", width: "30%", height: "30%" } },
      { text: "Your keyboard holds the clue.", coordinates: { top: "60%", left: "10%", width: "25%", height: "25%" } },
    ],
    background: "bg-purple-800",
    backgroundImage: level6Image,
  },
  {
    name: "NATO Codes",
    missionTitle: "Avert a Catastrophe",
    missionDescription: "To avert a potential catastrophe, your mission is to uncover the closely guarded secrets of the NATO command center. By gaining access to this concealed keyword, you can prevent a major crisis that could have devastating global consequences.",
    missionHintText: "Our sources confirm this NATO command center was used to coordinate illicit operations. The trail is cold, but not lost.",
    algorithm: (message: string) => natoCipher(message),
    messages: ["force", "base", "tank", "navy", "army"],
    hints: [
      { text: "Use NATO phonetic alphabets.", coordinates: { top: "65%", left: "70%", width: "15%", height: "10%" } },
      { text: "Match each letter with its NATO word.", coordinates: { top: "15%", left: "30%", width: "20%", height: "20%" } },
      { text: "Decode using military codes.", coordinates: { top: "45%", left: "10%", width: "30%", height: "30%" } },
    ],
    background: "bg-teal-600",
    backgroundImage: level7Image,
  },
  {
    name: "Country Flags",
    missionTitle: "Solve the Flags of Deception",
    missionDescription: "Hidden within the intricate designs of seemingly ordinary flags from around the world lies a secret code. This code conceals a dangerous plot orchestrated by a hidden network operating across borders. Decode the puzzle to expose an international conspiracy.",
    missionHintText: "Analysts believe this room was used by a network of international spies. Connect the dots to expose their plans.",
    algorithm: (message: string) => flagsCipher(message),
    messages: ["alias", "enemy", "covert", "agent", "intel"],
    hints: [
      { text: "Each flag maps to a letter.", coordinates: { top: "60%", left: "20%", width: "15%", height: "10%" } },
      { text: "Identify flags and match letters.", coordinates: { top: "40%", left: "35%", width: "15%", height: "15%" } },
      { text: "Look for unique country flags.", coordinates: { top: "20%", left: "65%", width: "12%", height: "30%" } },
    ],
    background: "bg-gray-700",
    backgroundImage: level8Image,
  },
  {
    name: "Decode the Secret Message with Tap Code",
    missionTitle: "Save the water facility",
    missionDescription: "The water facility has been compromised, and a catastrophic event is imminent. Your task is to decode the hidden messages within the water facility's systems before disaster strikes.",
    missionHintText: "Insiders suggest this water treatment facility was sabotaged for a larger scheme. Decode the system before it's too late.",
    algorithm: (message: string) => tapCodeEncode(message),
    messages: ["filtration", "infection", "sediment", "chlorine", "pumping"],
    hints: [
      {
        text: "Each number represents a row and column number of a 5X5 table of alphabets.",
        coordinates: { top: "65%", left: "0%", width: "10%", height: "15%" },
      },
      {
        text: "The grid uses rows and columns. Match numbers to letters.",
        coordinates: { top: "40%", left: "25%", width: "30%", height: "30%" },
      },
      {
        text: "Remember, 'K' is treated as 'C'.",
        coordinates: { top: "30%", left: "70%", width: "20%", height: "20%" },
      },
    ],
    background: "bg-gray-800",
    backgroundImage: level9Image,  
  },

  {
    name: "Decode the Secret Message with Tap Code Grid",
    missionTitle: "Unlock the power control",
    missionDescription: "Enemies have locked the power control room for a major city. Crack the code to restore power and stop chaos.",
    missionHintText: "This power grid holds some clues of the encrypted data. Look carefully!",
      algorithm: (message: string) => tapCodeEncodeGrid(message),
      messages: ["voltage", "current", "electric", "station", "circuit"],
      hints: [
      {
        text: "Each letter is encoded as a grid position: Row (A-E) and Column (1-5).",
        coordinates: { top: "15%", left: "25%", width: "15%", height: "15%" },
      },
      {
        text: "Match the grid position to decode the message.",
        coordinates: { top: "55%", left: "20%", width: "15%", height: "15%" },
      },
      {
        text: "Treat 'K' as 'C'. For example, K becomes A3.",
        coordinates: { top: "55%", left: "70%", width: "25%", height: "25%" },
      },
    ],
    background: "bg-gray-900",
    backgroundImage: level10Image,  
  },
  {
    name: "Decode the Secret Message with Zigzag Cipher",
    missionTitle: "Solve the Labyrinth",
    missionDescription: "Enemies have utilized a zigzagging sequence to conceal a critical information about a secret tunnel. Trace them before its too late.",
    missionHintText: "Agents reported strange activity in these tunnels. The zigzag paths are no coincidence.",
    algorithm: (message: string) => zigzagCipher(message, 2),
    messages: ["highway", "bridge", "street", "route", "slope"],
    hints: [
      {
        text: "Visualize the message in a zigzag pattern.",
        coordinates: { top: "35%", left: "45%", width: "20%", height: "20%" },
      },
      {
        text: "Read row by row from the zigzag pattern to reconstruct the message.",
        coordinates: { top: "60%", left: "65%", width: "20%", height: "20%" },
      },
      {
        text: "The number of rows determines the zigzag depth. Use 3 rows for this mission.",
        coordinates: { top: "60%", left: "10%", width: "15%", height: "15%" },
      },
    ],
    background: "bg-gray-800",
    backgroundImage: level11Image,
  },
  {
    name: "Morse Code",
    missionTitle: "Interrupt Enemy's Communication",
    missionDescription: "In an abandoned radio communication room, an old transmitter flickers with faint signals. Decode the secret to uncover the hidden transmission before the message reaches the enemy.",
    missionHintText: "Our informers suggest that this communication radio room was the heart of a covert operation. Decipher the encoded signals to intercept their intentions.",
    algorithm: (message: string) => morseCodeCipher(message),
    messages: ["tower", "radio", "band", "blast", "wire"],
    hints: [
      { text: "Decode dots and dashes to reveal letters.", coordinates: { top: "40%", left: "55%", width: "40%", height: "10%" } },
      { text: "Match Morse patterns to alphabets.", coordinates: { top: "65%", left: "0%", width: "20%", height: "20%" } },
      { text: "Focus on timing of dots and dashes.", coordinates: { top: "20%", left: "5%", width: "20%", height: "40%" } },
    ],
    background: "bg-red-800",
    backgroundImage: level12Image,
  },
  {
    name: "Braille",
    missionTitle: "Find The Final Truth",
    missionDescription: "Hidden in a forgotten archive room, are faded documents and cryptic symbols, inviting you to uncover the final mystery.",
    missionHintText: "Evidence suggests this archive was a safe haven for hidden secrets and holds the final key.",
    algorithm: (message: string) => brailleCipher(message),
    messages: ["bomb", "tank", "guns", "fire", "kill"],
    hints: [
      { text: "Decode Braille dots into letters.", coordinates: { top: "60%", left: "80%", width: "10%", height: "10%" } },
      { text: "Match dots to characters.", coordinates: { top: "45%", left: "25%", width: "35%", height: "35%" } },
      { text: "Each pattern character maps uniquely and can be felt.", coordinates: { top: "25%", left: "5%", width: "25%", height: "30%" } },
    ],
    background: "bg-indigo-600",
    backgroundImage: level13Image,
  },
];
function alphaToNumCipher(message: string) {
  return message.split('').map(char => (char.charCodeAt(0) - 96).toString()).join('.');
}

function caeserCipher(message: string){
  return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

function swappedLettersCipher(message: string) {
  return message.split('').map((char, i, arr) => i % 2 === 0 ? arr[i + 1] || char : arr[i - 1]).join('');
}

function reverseWordCipher(message: string) {
  return message.split('').reverse().join('');
}

function missingVowelsCipher(message: string) {
  return message.replace(/[aeiou]/gi, "*");
}


function qwertyCipher(message: string){
  const qwertyMap = {
    'a': 'q', 'b': 'w', 'c': 'e', 'd': 'r', 'e': 't', 'f': 'y', 'g': 'u', 'h': 'i',
    'i': 'o', 'j': 'p', 'k': 'a', 'l': 's', 'm': 'd', 'n': 'f', 'o': 'g', 'p': 'h',
    'q': 'j', 'r': 'k', 's': 'l', 't': 'z', 'u': 'x', 'v': 'c', 'w': 'v', 'x': 'b',
    'y': 'n', 'z': 'm'
  };
  return message.split('').map(char => qwertyMap[char] || char).join('');
};

function natoCipher(message: string) {
  const natoAlphabet = {
    'a': 'alpha', 'b': 'bravo', 'c': 'charlie', 'd': 'delta', 'e': 'echo',
    'f': 'foxtrot', 'g': 'golf', 'h': 'hotel', 'i': 'india', 'j': 'juliett',
    'k': 'kilo', 'l': 'lima', 'm': 'mike', 'n': 'november', 'o': 'oscar',
    'p': 'papa', 'q': 'quebec', 'r': 'romeo', 's': 'sierra', 't': 'tango',
    'u': 'uniform', 'v': 'victor', 'w': 'whiskey', 'x': 'x-ray', 'y': 'yankee', 'z': 'zulu'
  };
  return message.split('').map(char => natoAlphabet[char] || char).join(' ');
}

function flagsCipher(message: string){
  const flagMap = {
    'a': '🇦🇷', 'b': '🇧🇷', 'c': '🇨🇲', 'd': '🇩🇰', 'e': '🇪🇸',
    'f': '🇫🇷', 'g': '🇩🇪', 'h': '🇭🇳', 'i': '🇮🇳', 'j': '🇯🇵',
    'k': '🇰🇪', 'l': '🇱🇻', 'm': '🇲🇽', 'n': '🇳🇴', 'o': '🇴🇲',
    'p': '🇵🇰', 'q': '🇶🇦', 'r': '🇷🇺', 's': '🇸🇦', 't': '🇹🇭',
    'u': '🇺🇸', 'v': '🇻🇳', 'w': '🇼🇸', 'x': '🇽🇰', 'y': '🇾🇪', 'z': '🇿🇦'
  };
  return message.split('').map(char => flagMap[char] || char).join(' ');
}

const tapCodeEncode = (message: string) => {
  const grid = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"]
  ];

  const getTapCode = (char: string) => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === char.toUpperCase()) {
          return ` ${row+1}${col+1} `; 
        }
      }
    }
    return char; // Return as is for spaces or unsupported characters
  };

  return message
    .toUpperCase()
    .split("")
    .map((char) => (char === "K" ? getTapCode("C") : getTapCode(char))) // Treat 'K' as 'C'
    .join("   "); 
};

const zigzagCipher = (message: string, rows: number = 3): string => {
  if (rows === 1) return message;

  const zigzag: string[][] = Array.from({ length: rows }, () => []);
  let row = 0;
  let direction = 1;

  for (const char of message) {
    zigzag[row].push(char);
    if (row === 0) direction = 1;
    if (row === rows - 1) direction = -1;
    row += direction;
  }

  return zigzag.flat().join(""); 
};


const tapCodeEncodeGrid = (message: string) => {
  const grid = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O"],
    ["P", "Q", "R", "S", "T"],
    ["U", "V", "W", "X", "Y"]
  ];

  const getGridCode = (char: string) => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === char.toUpperCase()) {
          return `${String.fromCharCode(65 + row)}${col + 1}`;
        }
      }
    }
    return char; // Return as is for unsupported characters
  };

  return message
    .toUpperCase()
    .split("")
    .map((char) => (char === "K" ? getGridCode("C") : getGridCode(char))) // Treat 'K' as 'C'
    .join(" ");
};


function morseCodeCipher(message: string){
  const morseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
    'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..'
  };
  return message.split('').map(char => morseCode[char] || char).join(' ');
}

function brailleCipher(message: string){
  const brailleCode = {
    'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋',
    'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇',
    'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗',
    's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
    'y': '⠽', 'z': '⠵'
  };
  return message.split('').map(char => brailleCode[char] || char).join(' ');
}


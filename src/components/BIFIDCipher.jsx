import React, { useState } from "react";
import BlueBtn from "../UI/BlueBtn";

const BIFIDCipher = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");

  const generateBifidSquare = (key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const square = [];

    for (let i = 0; i < 5; i++) {
      square.push([]);
    }

    const uniqueKey = removeDuplicates(key);
    let remainingAlphabet = removeCharacters(alphabet, uniqueKey);

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (row === 4 && col === 4) {
          square[row][col] = remainingAlphabet;
        } else if (row * 5 + col < uniqueKey.length) {
          square[row][col] = uniqueKey[row * 5 + col];
        } else {
          square[row][col] = remainingAlphabet[0];
          remainingAlphabet = remainingAlphabet.substring(1);
        }
      }
    }

    return square;
  };

  const removeDuplicates = (str) => {
    let uniqueStr = "";

    for (let i = 0; i < str.length; i++) {
      if (uniqueStr.indexOf(str[i]) === -1) {
        uniqueStr += str[i];
      }
    }

    return uniqueStr;
  };

  const removeCharacters = (str, chars) => {
    let removedStr = "";

    for (let i = 0; i < str.length; i++) {
      if (chars.indexOf(str[i]) === -1) {
        removedStr += str[i];
      }
    }

    return removedStr;
  };

  const textToCoordinates = (text, square) => {
    const coordinates = [];

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      for (let row = 0; row < square.length; row++) {
        for (let col = 0; col < square[row].length; col++) {
          if (square[row][col] === char) {
            coordinates.push([row, col]);
            break;
          }
        }
      }
    }

    return coordinates;
  };

  const coordinatesToText = (coordinates, square) => {
    let text = "";
    const combinedCoordinates = [];
    for (let i = 0; i < coordinates.length; i++) {
      const row = coordinates[i][0];
      const col = coordinates[i][1];
      combinedCoordinates.push(row);
      combinedCoordinates.push(col);
    }

    const mid = Math.ceil(combinedCoordinates.length / 2);
    const splitCoordinates = [
      combinedCoordinates.slice(0, mid),
      combinedCoordinates.slice(mid),
    ];

    for (let j = 0; j < splitCoordinates[0].length; j++) {
      const row = splitCoordinates[0][j];
      const col = splitCoordinates[1][j];
      text += square[row][col];
    }

    return text;
  };

  const encrypt = () => {
    const inputTextUpper = inputText.toUpperCase();
    const keyUpper = key.toUpperCase();

    const square = generateBifidSquare(keyUpper);
    const coordinates = textToCoordinates(inputTextUpper, square);

    let ciphertext = "";
    for (let i = 0; i < coordinates.length; i++) {
      const row = coordinates[i][0];
      const col = coordinates[i][1];
      ciphertext += square[row][col];
    }

    setResultText(ciphertext);
  };

  const decrypt = () => {
    const inputTextUpper = inputText.toUpperCase();
    const keyUpper = key.toUpperCase();

    const square = generateBifidSquare(keyUpper);
    const coordinates = textToCoordinates(inputTextUpper, square);
    const plaintext = coordinatesToText(coordinates, square);

    setResultText(plaintext);
  };

  return (
    <main className="w-3/5 mx-auto my-14 bg-white rounded-sm shadow-md px-5 py-4">
      <div className="flex flex-col">
        <h2 className="text-base md:text-xl font-semibold text-orange-400 text-center mb-8">
          BIFID Cipher Encryption and Decryption
        </h2>
        <div className="form-control mb-4">
          <label htmlFor="inputText" className="font-semibold text-blue-600">
            Enter the text:
          </label>
          <input
            type="text"
            id="inputText"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="key" className="font-semibold text-blue-600">
            Enter the key:
          </label>
          <input
            type="text"
            id="key"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>

        <div className="buttons mb-4 space-x-2">
          <BlueBtn onclick={encrypt}>Encrypt</BlueBtn>
          <BlueBtn onclick={decrypt}>Decrypt</BlueBtn>
        </div>

        <div className="result">
          <label htmlFor="resultText" className="font-semibold text-blue-600">
            Result:
          </label>
          <input
            type="text"
            id="resultText"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={resultText}
            readOnly
          />
        </div>
      </div>
    </main>
  );
};

export default BIFIDCipher;

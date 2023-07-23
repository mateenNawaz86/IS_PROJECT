import React, { useState } from "react";
import BlueBtn from "../UI/BlueBtn";

const ADFGXCipher = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");

  const encrypt = () => {
    const cleanedInputText = inputText.replace(/\s/g, "").toUpperCase();
    const cleanedKey = key.replace(/\s/g, "").toUpperCase();

    const ciphertext = performADFGXOperation(
      cleanedInputText,
      cleanedKey,
      true
    );
    setResultText(ciphertext);
  };

  const decrypt = () => {
    const cleanedInputText = inputText.replace(/\s/g, "").toUpperCase();
    const cleanedKey = key.replace(/\s/g, "").toUpperCase();

    const plaintext = performADFGXOperation(
      cleanedInputText,
      cleanedKey,
      false
    );
    setResultText(plaintext);
  };

  const performADFGXOperation = (text, key, encrypt) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const adfgx = "ADFGX";

    const grid = generateADFGXGrid(key, alphabet);
    let result = "";

    for (let char of text) {
      const coordinates = findCharacterCoordinates(char, grid);
      if (coordinates) {
        const rowSymbol = adfgx[coordinates[0]];
        const colSymbol = adfgx[coordinates[1]];
        result += rowSymbol + colSymbol;
      }
    }

    return encrypt ? result : performADFGXDecryption(result, grid);
  };

  const generateADFGXGrid = (key, alphabet) => {
    const uniqueKey = removeDuplicates(key);
    const remainingAlphabet = removeCharacters(alphabet, uniqueKey + "J");

    let grid = [...uniqueKey];

    for (let char of remainingAlphabet) {
      grid.push(char);
    }

    return grid;
  };

  const performADFGXDecryption = (adfgxText, grid) => {
    const adfgx = "ADFGX";
    let result = "";

    for (let i = 0; i < adfgxText.length; i += 2) {
      const row = adfgx.indexOf(adfgxText[i]);
      const col = adfgx.indexOf(adfgxText[i + 1]);
      result += grid[row * 5 + col];
    }

    return result;
  };

  const findCharacterCoordinates = (char, grid) => {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (grid[row * 5 + col].includes(char)) {
          return [row, col];
        }
      }
    }
    return null;
  };

  const removeDuplicates = (str) => {
    let uniqueStr = "";
    for (let char of str) {
      if (!uniqueStr.includes(char) && char !== "J") {
        uniqueStr += char;
      }
    }
    return uniqueStr;
  };

  const removeCharacters = (str, chars) => {
    let removedStr = "";
    for (let char of str) {
      if (!chars.includes(char)) {
        removedStr += char;
      }
    }
    return removedStr;
  };

  return (
    <main className="w-3/5 mx-auto my-14 bg-white rounded-sm shadow-md px-5 py-4">
      <div className="flex flex-col">
        <h2 className="text-base md:text-xl font-semibold text-orange-400 text-center mb-8">
          ADFGX Cipher Encryption and Decryption
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

export default ADFGXCipher;

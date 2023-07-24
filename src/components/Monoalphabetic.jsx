import React, { useState } from "react";
import BlueBtn from "../UI/BlueBtn";

const MonoalphabeticCipher = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");

  const encrypt = () => {
    const inputTextUpper = inputText.toUpperCase();
    const keyUpper = key.toUpperCase();

    let ciphertext = "";

    // Create the encryption substitution mapping based on the key
    const encryptionSubstitution = {};
    for (let i = 0; i < keyUpper.length; i++) {
      if (!encryptionSubstitution.hasOwnProperty(keyUpper[i])) {
        encryptionSubstitution[keyUpper[i]] = true;
      }
    }

    // Fill in the remaining unused characters in the encryption mapping
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let j = 0; j < alphabets.length; j++) {
      const letter = alphabets[j];
      if (!encryptionSubstitution.hasOwnProperty(letter)) {
        encryptionSubstitution[letter] = true;
      }
    }

    // Perform the encryption by substituting each character
    for (let k = 0; k < inputTextUpper.length; k++) {
      const char = inputTextUpper[k];
      ciphertext += encryptionSubstitution[char] || char;
    }

    setResultText(ciphertext);
  };

  const decrypt = () => {
    const inputTextUpper = inputText.toUpperCase();
    const keyUpper = key.toUpperCase();

    let plaintext = "";

    // Create the decryption substitution mapping based on the key
    const decryptionSubstitution = {};
    for (let i = 0; i < keyUpper.length; i++) {
      if (!decryptionSubstitution.hasOwnProperty(keyUpper[i])) {
        decryptionSubstitution[keyUpper[i]] = true;
      }
    }

    // Fill in the remaining unused characters in the decryption mapping
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let j = 0; j < alphabets.length; j++) {
      const letter = alphabets[j];
      if (!decryptionSubstitution.hasOwnProperty(letter)) {
        decryptionSubstitution[letter] = true;
      }
    }

    // Perform the decryption by substituting each character
    for (let k = 0; k < inputTextUpper.length; k++) {
      const char = inputTextUpper[k];
      const reversedSubstitution = Object.entries(decryptionSubstitution).find(
        ([key, value]) => value === char
      );
      plaintext += reversedSubstitution ? reversedSubstitution[0] : char;
    }

    setResultText(plaintext);
  };

  return (
    <main className="w-3/5 mx-auto my-14 bg-white rounded-sm shadow-md px-5 py-4">
      <div className="flex flex-col">
        <h2 className="text-base md:text-xl font-semibold text-orange-400 text-center mb-8">
          Monoalphabetic Cipher Encryption and Decryption
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

export default MonoalphabeticCipher;

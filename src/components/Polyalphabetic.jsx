import React, { useState } from "react";
import BlueBtn from "../UI/BlueBtn";

const Polyalphabetic = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");

  const encrypt = () => {
    const inputTextUpper = inputText.toUpperCase();
    const keyUpper = key.toUpperCase();

    let ciphertext = "";
    let keyIndex = 0;

    // Encrypt each character of the input text
    for (let i = 0; i < inputTextUpper.length; i++) {
      const char = inputTextUpper[i];
      const keyCode = keyUpper.charCodeAt(keyIndex) - 65; // Convert key character to ASCII code and normalize to 0-25 range

      if (char >= "A" && char <= "Z") {
        const encryptedChar = String.fromCharCode(
          ((char.charCodeAt() - 65 + keyCode) % 26) + 65
        ); // Perform encryption
        ciphertext += encryptedChar;
        keyIndex = (keyIndex + 1) % keyUpper.length; // Move to the next key character
      } else {
        ciphertext += char; // Non-alphabetic character, keep it as is
      }
    }

    setResultText(ciphertext);
  };

  const decrypt = () => {
    const inputTextUpper = inputText.toUpperCase();
    const keyUpper = key.toUpperCase();

    let plaintext = "";
    let keyIndex = 0;

    // Decrypt each character of the input text
    for (let i = 0; i < inputTextUpper.length; i++) {
      const char = inputTextUpper[i];
      const keyCode = keyUpper.charCodeAt(keyIndex) - 65; // Convert key character to ASCII code and normalize to 0-25 range

      if (char >= "A" && char <= "Z") {
        const decryptedChar = String.fromCharCode(
          ((char.charCodeAt() - 65 - keyCode + 26) % 26) + 65
        ); // Perform decryption
        plaintext += decryptedChar;
        keyIndex = (keyIndex + 1) % keyUpper.length; // Move to the next key character
      } else {
        plaintext += char; // Non-alphabetic character, keep it as is
      }
    }

    setResultText(plaintext);
  };
  return (
    <main className="w-3/5 mx-auto my-14 bg-white rounded-sm shadow-md px-5 py-4">
      <div className="flex flex-col">
        <h2 className="text-base md:text-xl font-semibold text-orange-400 text-center mb-8">
          Polyalphabetic Cipher Encryption and Decryption
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

export default Polyalphabetic;

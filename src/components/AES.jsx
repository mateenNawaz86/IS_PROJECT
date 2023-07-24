import React, { useState } from "react";
import CryptoJS from "crypto-js";
import BlueBtn from "../UI/BlueBtn";

const AES = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");

  const encrypt = () => {
    if (inputText.trim() === "" || key.trim() === "") {
      setResultText("Error: Input and key cannot be empty");
      return;
    }

    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(inputText),
      key
    ).toString();
    setResultText(encrypted);
  };

  const decrypt = () => {
    if (resultText.trim() === "" || key.trim() === "") {
      setResultText("Error: Ciphertext and key cannot be empty");
      return;
    }

    try {
      const decrypted = CryptoJS.AES.decrypt(resultText, key).toString(
        CryptoJS.enc.Utf8
      );
      setResultText(decrypted);
    } catch (error) {
      setResultText("Error: Invalid Key or Ciphertext");
    }
  };

  return (
    <main className="w-3/5 mx-auto my-14 bg-white rounded-sm shadow-md px-5 py-4">
      <div className="flex flex-col">
        <h2 className="text-base md:text-xl font-semibold text-orange-400 text-center mb-8">
          AES Cipher Encryption and Decryption
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

export default AES;

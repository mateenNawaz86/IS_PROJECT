import React, { useState, useEffect } from "react";
import BlueBtn from "../UI/BlueBtn";

const CaesarCipher = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const encrypt = () => {
    let message = inputText;
    let keyVal = parseInt(key);
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        encryptedMessage += String.fromCharCode(
          ((charCode - 65 + keyVal + 26) % 26) + 65
        );
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedMessage += String.fromCharCode(
          ((charCode - 97 + keyVal + 26) % 26) + 97
        );
      } else {
        encryptedMessage += message.charAt(i);
      }
    }

    setEncryptedText(encryptedMessage);
  };

  const decrypt = () => {
    let message = encryptedText;
    let keyVal = parseInt(key);
    let decryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        decryptedMessage += String.fromCharCode(
          ((charCode - 65 - keyVal + 26) % 26) + 65
        );
      } else if (charCode >= 97 && charCode <= 122) {
        decryptedMessage += String.fromCharCode(
          ((charCode - 97 - keyVal + 26) % 26) + 97
        );
      } else {
        decryptedMessage += message.charAt(i);
      }
    }

    setDecryptedText(decryptedMessage);
  };

  useEffect(() => {
    setEncryptedText("");
    setDecryptedText("");
  }, [inputText, key]);

  return (
    <main className="w-3/5 mx-auto my-14 bg-white rounded-sm shadow-md px-5 py-4">
      <div className="flex flex-col">
        <h2 className="text-base md:text-xl font-semibold text-orange-400 text-center mb-8">
          CAESAR Cipher Encryption and Decryption
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
            Encrypted Result:
          </label>
          <input
            type="text"
            id="resultText"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={encryptedText}
            readOnly
          />
          <label
            htmlFor="decryptedText"
            className="font-semibold text-blue-600"
          >
            Decrypted Result:
          </label>
          <input
            type="text"
            id="decryptedText"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={decryptedText}
            readOnly
          />
        </div>
      </div>
    </main>
  );
};

export default CaesarCipher;

import React, { useState } from "react";
import BlueBtn from "../UI/BlueBtn";

const RailFence = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");

  const encrypt = () => {
    var processedText = inputText.replace(/\s/g, ""); // Remove spaces from input text
    var rails = 3; // number of fence rails, change as needed

    var fence = [];
    for (var i = 0; i < rails; i++) {
      fence.push([]);
    }

    var rail = 0;
    var direction = 1; // direction of movement: down (1) or up (-1)

    // Fill the fence with the characters of the input text
    for (var j = 0; j < processedText.length; j++) {
      fence[rail].push(processedText[j]);

      rail += direction;

      if (rail === 0 || rail === rails - 1) {
        direction *= -1; // change direction
      }
    }

    var ciphertext = "";

    // Read the characters from the fence in a zigzag pattern
    for (var k = 0; k < rails; k++) {
      ciphertext += fence[k].join("");
    }

    setResultText(ciphertext);
  };

  const decrypt = () => {
    var rails = 3; // number of fence rails, change as needed

    var fence = [];
    for (var i = 0; i < rails; i++) {
      fence.push([]);
    }

    var rail = 0;
    var direction = 1; // direction of movement: down (1) or up (-1)

    // Create an empty fence structure with the same length as the input text
    for (var j = 0; j < inputText.length; j++) {
      fence[rail].push("");

      rail += direction;

      if (rail === 0 || rail === rails - 1) {
        direction *= -1; // change direction
      }
    }

    var charIndex = 0;

    // Fill the fence with placeholder characters to represent the zigzag pattern
    for (var k = 0; k < rails; k++) {
      for (var m = 0; m < fence[k].length; m++) {
        fence[k][m] = inputText[charIndex];
        charIndex++;
      }
    }

    // Reconstruct the plaintext from the fence
    var plaintext = "";

    rail = 0;
    direction = 1;

    for (var n = 0; n < inputText.length; n++) {
      plaintext += fence[rail][0];
      fence[rail].splice(0, 1);

      rail += direction;

      if (rail === 0 || rail === rails - 1) {
        direction *= -1; // change direction
      }
    }

    setResultText(plaintext);
  };
  return (
    <main className="w-3/5 mx-auto my-14 bg-white rounded-sm shadow-md px-5 py-4">
      <div className="flex flex-col">
        <h2 className="text-base md:text-xl font-semibold text-orange-400 text-center mb-8">
          RailFence Cipher Encryption and Decryption
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

export default RailFence;

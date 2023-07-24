import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ADFGXCipher from "./components/ADFGXCipher";
import AES from "./components/AES";
import BIFIDCipher from "./components/BIFIDCipher";
import CaesarCipher from "./components/CaesarCipher";
import Monoalphabetic from "./components/Monoalphabetic";
import Polyalphabetic from "./components/Polyalphabetic";
import RailFence from "./components/RailFence";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ADFGXCipher />} exact />
        <Route path="/aes-cipher" element={<AES />} exact />
        <Route path="/bifid-cipher" element={<BIFIDCipher />} exact />
        <Route path="/caesar-cipher" element={<CaesarCipher />} exact />
        <Route
          path="/monoalphabetic-cipher"
          element={<Monoalphabetic />}
          exact
        />
        <Route
          path="/polyalphabetic-cipher"
          element={<Polyalphabetic />}
          exact
        />
        <Route path="/railfence-cipher" element={<RailFence />} exact />
      </Routes>
    </>
  );
};

export default App;

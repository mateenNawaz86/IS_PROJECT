import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ADFGXCipher from "./components/ADFGXCipher";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/adfgx-cipher" element={<ADFGXCipher />} exact />
      </Routes>
    </>
  );
};

export default App;

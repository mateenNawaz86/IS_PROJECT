import React from "react";

const BlueBtn = (props) => {
  return (
    <button
      onClick={props.onclick}
      className="sm:px-4 sm:py-2 px-2 py-1 rounded text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-500 hover:bg-blue-600"
    >
      {props.children}
    </button>
  );
};

export default BlueBtn;

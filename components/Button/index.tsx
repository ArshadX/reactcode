import React, { useState } from "react";

const index = ({ onPress, setnavigationHistory, title, active }) => {
  return (
    <button
      onClick={() => {
        setnavigationHistory(() => [title]);
        onPress();
      }}
      className={`flex py-2 text-left text-base group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
        active ? "text-red" : "text-white"
      } `}>
      {title}
    </button>
  );
};

export default index;

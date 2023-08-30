import menuData from "./menuData";
import { useState } from "react";
const Index = ({ onPress, left }) => {
  const [navigationHistory, setNavigationHistory] = useState([]);
  return (
    <>
      <ul className={`space-y-4 ${left ? "ml-36" : "mx-12"}`}>
        {menuData.map((ele) => (
          <li key={ele.id}>
            <button
              className={`${
                navigationHistory[0] === ele.title ? "text-red" : "text-body-color"
              }  text-left font-sans font-semibold transition-all hover:-translate-y-[0.5] hover:text-base hover:text-white`}
              onClick={() => {
                setNavigationHistory([ele.title]);
                onPress(ele.title);
              }}>
              {ele.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </>
  );
};

export default Index;

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import menuData from "./menuData";
const index = () => {
  return (
    <>
      <ul className="">
        {menuData.map((ele) => (
          <li key={ele.id}>{ele.title}</li>
        ))}
      </ul>
    </>
  );
};

export default index;

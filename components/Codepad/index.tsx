"use client";

import React, { useEffect, useRef, useState } from "react";
import { clearTimeout } from "timers";

const index = ({ children }: { children: React.ReactNode }) => {
  const inputRef = useRef(null);
  let clearTimeOutRef = null;
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inputRef.current.innerText).then(() => setCopied(true));
      clearTimeOutRef = setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    return clearTimeout(clearTimeOutRef);
  }, []);
  return (
    <div className="relative z-[0] mx-10 rounded-lg bg-dark p-1 shadow-lg">
      <span className="float-right">
        <svg
          width="20"
          height="25"
          onClick={copyToClipboard}
          viewBox="0 0 30 35"
          className="isolate m-1 opacity-60 hover:opacity-100">
          <g className="stroke-white stroke-1 ">
            <rect width="20" height="25" className=" fill-slate " />
            <rect width="20" height="25" x={8} y={8} className=" fill-slate " />
          </g>
        </svg>
      </span>
      <text
        className={`${
          copied ? "visible opacity-100" : " invisible opacity-0"
        } absolute right-2 isolate rounded-md bg-twitterBlue px-2 py-1 text-center text-xs font-medium text-dark shadow-md transition-all duration-700 ease-in-out`}>
        Copied &#x21;
      </text>
      <div ref={inputRef}>{children}</div>
    </div>
  );
};

export default index;

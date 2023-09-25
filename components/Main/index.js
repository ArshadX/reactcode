"use client";
import React, { useRef } from "react";
import Searchbar from "@/database/docs/Searchbar/demo.mdx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const index = ({ content }) => {
  function code({ className, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={atelierCaveDark} />
    ) : (
      <code className={className} {...props} />
    );
  }

  return (
    <>
      <main className="">
        {content.map((ele) => ele)}
        <article className="prose prose-invert float-none lg:prose-xl prose-pre:m-0 prose-pre:p-0">
          <Searchbar components={{ code }} />
        </article>
      </main>
    </>
  );
};

export default index;

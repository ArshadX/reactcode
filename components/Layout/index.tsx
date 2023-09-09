"use client";
import React, { useState } from "react";
import SideBar from "../Sidebar";
import Main from "../Main";
import CollapsableNavBar from "../CollapsableNavbar";
import menuDataSidebar from "@/components/Sidebar/menuData";
const Layout = () => {
  const [content, setContent] = useState([]);

  //Sidebar Toogle in sm
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // sidebarNav
  const sidebarToggleHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleContent = (title: string) => {
    setContent([
      <text className="text-9xl" key={title + 1}>
        {title}
      </text>,
    ]);
  };
  return (
    <>
      <CollapsableNavBar
        sidebarOpen={sidebarOpen}
        sidebarToggleHandler={sidebarToggleHandler}
        menuData={menuDataSidebar}
        onPress={() => console.log("menudata clicked sidebar")}
      />
      <main id="docs" className="grid grid-cols-12 divide-x-0 divide-body-color/50">
        <section className="col-span-3 hidden h-screen w-full overflow-y-scroll  scroll-smooth bg-dark/30  backdrop-blur-sm lg:block">
          <SideBar onPress={handleContent} left={true} />
        </section>
        <section className="col-span-full h-screen overflow-y-scroll scroll-smooth bg-transparent lg:col-span-6 ">
          <Main content={content} />
        </section>
        <section className="col-span-3 hidden h-screen w-full overflow-y-scroll scroll-smooth bg-dark/30 backdrop-blur-sm lg:block">
          <SideBar onPress={handleContent} left={false} />
        </section>
      </main>
      <div className="!absolute bottom-0 left-0 right-0 z-[-2]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </>
  );
};

export default Layout;

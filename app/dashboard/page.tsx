"use client";
import { useState } from "react";
import Main from "@/components/Main";
import ScrollUp from "@/components/Common/ScrollUp";
import SideBar from "@/components/Sidebar";
import menuDataSidebar from "@/components/Sidebar/menuData";
import ToggledSidebar from "@/components/Common/ToggledSidebar";

const Dashboard = () => {
  const [content, setContent] = useState([]);

  //Sidebar Toogle in sm

  const handleContent = (title: string) => {
    setContent([<text className="text-9xl">{title}</text>]);
  };
  return (
    <>
      <ToggledSidebar menuDataSidebar={menuDataSidebar} handleContent={handleContent} />
      <main className="grid grid-cols-12 divide-x-0 divide-body-color/50">
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
      <ScrollUp />
    </>
  );
};

export default Dashboard;

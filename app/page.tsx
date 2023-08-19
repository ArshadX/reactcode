"use client";
import { IBM_Plex_Sans } from "@next/font/google";
import SideBar from "../components/Sidebar";
import ScrollUp from "@/components/Common/ScrollUp";
import Main from "@/components/Main";
const inter = IBM_Plex_Sans({
  weight: ["300"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-8 gap-0 divide-x ">
        <section className="col-end-2 bg-yellow">
          <SideBar />
        </section>
        <section className="col-start-2 col-end-8  bg-primary">
          <Main />
        </section>
        <section className="col-start-8 bg-body-color">
          <SideBar />
        </section>
      </main>
      <ScrollUp />
    </>
  );
}

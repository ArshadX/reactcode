import Link from "next/link";
import React, { useState } from "react";
import { colors } from "@/app/constants/constants";
import Button from "@/components/Button";
const Index = ({ menuData, sidebarToggleHandler, sidebarOpen, onPress }) => {
  const [navigationHistory, setnavigationHistory] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="flex items-center bg-dark/30 backdrop-blur lg:hidden">
      <button
        onClick={sidebarToggleHandler}
        id="navbarToggler"
        aria-label="Mobile Menu"
        className="relative inline rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ">
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            sidebarOpen ? " top-[7px] rotate-45" : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            sidebarOpen ? "opacity-0 " : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            sidebarOpen ? " top-[-8px] -rotate-45" : " "
          }`}
        />
      </button>
      <nav
        id="navbarCollapse"
        className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
          sidebarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"
        }`}>
        <ul className="block scroll-smooth lg:flex lg:space-x-12">
          {menuData.map((menuItem, index) => (
            <li key={menuItem.id} className="group relative">
              {menuItem.path ? (
                <Button
                  title={menuItem.title}
                  setnavigationHistory={setnavigationHistory}
                  onPress={onPress}
                  active={navigationHistory[0] === menuItem.title ? true : false}
                />
              ) : (
                <>
                  <a
                    onClick={() => handleSubmenu(index)}
                    className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0">
                    {menuItem.title}
                    <span className="pl-3">
                      <svg width="15" height="14" viewBox="0 0 15 14">
                        <path
                          d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                  <div
                    className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                      openIndex === index ? "block" : "hidden"
                    }`}>
                    {menuItem.submenu.map((submenuItem) => (
                      <Link
                        href={submenuItem.path}
                        key={submenuItem.id}
                        className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3">
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-2">
        {navigationHistory.map((ele, index) => (
          <text className="text-sm text-white" key={ele + index}>
            {ele} &#62;
          </text>
        ))}
      </div>
    </div>
  );
};

export default Index;

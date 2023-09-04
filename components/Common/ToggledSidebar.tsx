import { useState } from "react";
import CollasableNavbar from "../CollapsableNavbar";
const ToggledSidebar = ({ menuDataSidebar, handleContent }) => {
  const [sidebar, setSidebar] = useState(false);
  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const sideBarToggleHandler = () => {
    setSidebar(!sidebar);
  };
  return <div className="lg:hidden "></div>;
};

export default ToggledSidebar;

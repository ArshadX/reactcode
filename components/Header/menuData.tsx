import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Docs",
    path: "",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "Components",
        path: "",
        newTab: false,
      },
      {
        id: 2,
        title: "APIs",
        path: "",
        newTab: false,
      },
      {
        id: 3,
        title: "Algorithms",
        path: "",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Showcase",
    // path: "/about",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    // path: "/contact",
    path: "/blog",
    newTab: false,
  },
];
export default menuData;


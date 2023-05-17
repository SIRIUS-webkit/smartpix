"use client";

import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { Image } from "@mantine/core";
interface SideBarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ open, setOpen }: SideBarProps) {
  const Menus = [
    { title: "Text To Image", src: "Chart_fill", activeText: "playground" },
    { title: "Object Detection", src: "Chat", activeText: "objectdetection" },
    {
      title: "Image Classification",
      src: "User",
      activeText: "objectclassification",
    },
    { title: "Model Traning", src: "Calendar", activeText: "modeltraining" },
    { title: "Setting", src: "Calendar", activeText: "setting", gap: true },
  ];
  const pathname: string = usePathname();

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-white  min-h-screen p-5 left-0 top-0  shadow-sm pt-8 fixed duration-300`}
    >
      <Image
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="close"
      />
      <div className="flex gap-x-4 items-center">
        {/* <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        /> */}
        <h3
          className={`origin-left font-bold duration-200 ${!open && "scale-0"}`}
        >
          Smart Pix
        </h3>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p2-regular-16 cursor-pointer p-3 hover:bg-main-gradient hover:text-white items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              pathname.includes(Menu.activeText)
                ? "bg-main-gradient text-white"
                : null
            }`}
          >
            {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 p2-regular-16`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

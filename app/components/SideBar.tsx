"use client";
import React, { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Text To Image", src: "Chart_fill" },
    { title: "Object Detection", src: "Chat" },
    { title: "Image Classification", src: "User", gap: true },
    { title: "Model Traning", src: "Calendar" },

    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-white  h-screen p-5  pt-8 relative duration-300`}
    >
      {/* <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt=""
      /> */}
      <div className="flex gap-x-4 items-center">
        {/* <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        /> */}
        <h1
          className={`origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p2-regular-16 cursor-pointer p-3 hover:bg-[#45444d] items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
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

"use client";

import React, { Dispatch, SetStateAction, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiImageEditFill } from "react-icons/ri";
import { FaRegObjectGroup } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Badge, Tooltip } from "@mantine/core";
import { AuthContext } from "@/utils/AuthContext";
import { getAuth } from "firebase/auth";
import initFirebaseApp from "@/utils/firebase/config";

interface SideBarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ open, setOpen }: SideBarProps) {
  const { user }: any = useContext(AuthContext);
  const auth = getAuth(initFirebaseApp);
  const router = useRouter();

  const Menus = [
    {
      title: "Text To Image",
      src: "Chart_fill",
      activeText: "texttoimage",
      link: "/playground/texttoimage",
      icon: <RiImageEditFill className="text-[20px]" />,
      tooltext: "Text to Image",
    },
    {
      title: "Object Detection",
      src: "Chat",
      activeText: "objectdetection",
      link: "/playground/objectdetection",
      icon: <FaRegObjectGroup className="text-[20px]" />,
      tooltext: "Object Detection",
    },
    {
      title: "Image Classification",
      src: "User",
      activeText: "imageclassification",
      link: "/playground/imageclassification",
      icon: <GiArtificialHive className="text-[20px]" />,
      tooltext: "Image Classification",
    },
    {
      title: "Model Traning",
      src: "Calendar",
      activeText: "modeltraining",
      link: "/",
      isPremiun: true,
      icon: <MdModelTraining className="text-[20px]" />,
      tooltext: "Model Training",
    },
  ];
  const pathname: string = usePathname();

  const logout = async (): Promise<void> => {
    await auth
      .signOut()
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-white  min-h-screen p-5 left-0 top-0  shadow-sm pt-8 fixed duration-300`}
    >
      <div
        className="absolute cursor-pointer right-3 top-10 w-7"
        role="presentation"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <MdOutlineArrowBackIos className="text-[20px]" />
        ) : (
          <HiOutlineChevronRight className="text-[22px]" />
        )}
      </div>
      <div className="flex gap-x-4 items-center">
        <Link href="/">
          <h3
            className={`origin-left font-bold duration-200 ${
              !open && "scale-0 hidden"
            }`}
          >
            SmartPix
          </h3>
        </Link>
      </div>
      <ul
        className={` ${
          open ? "mt-0" : "mt-9"
        } pt-9 flex flex-col gap-4 relative`}
      >
        {Menus?.map((menu, i) => (
          <li
            key={i}
            className={`group flex items-center gap-3.5 cursor-pointer p-[10px] hover:bg-main-gradient hover:text-white rounded-md 
            ${
              pathname.includes(menu.activeText)
                ? "bg-main-gradient text-white"
                : null
            }
            `}
          >
            <div>{menu.icon}</div>
            <p
              // style={{
              //   transitionDelay: `${i + 1}00ms`,
              // }}
              className={`whitespace-pre p2-regular-16  ${
                !open && "opacity-0 overflow-hidden"
              }`}
            >
              {menu.isPremiun ? (
                <span>{menu.title}</span>
              ) : (
                <Link href={menu.link}>{menu.title}</Link>
              )}
            </p>
            {menu.isPremiun ? (
              <div
                style={{
                  transitionDelay: !open ? "0ms" : "400ms",
                }}
                className={`${
                  !open && "opacity-0 overflow-hidden"
                } absolute left-[160px]`}
              >
                <Badge size="xs" radius="xs" variant="filled">
                  PREMIUM
                </Badge>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="absolute flex items-center space-x-3 bottom-0 left-0 bg-main-gradient px-6 py-5 w-full">
        {user?.photoURL ? (
          <div className="flex space-x-9">
            <p className="flex space-x-3 items-center">
              <Image
                src={user?.photoURL}
                alt="userprofile"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span
                className={`${
                  !open && "opacity-0 overflow-hidden"
                } absolute left-[54px] duration-200 text-white`}
              >
                {user?.displayName}
              </span>
            </p>
            <button
              className={`${
                !open && "hidden"
              } p2-regular-16 text-white absolute left-[180px] top-5`}
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <BsPersonCircle className="text-[20px] text-white" />
            <p
              className={`${
                !open && "opacity-0 overflow-hidden"
              } absolute left-12 p2-regular-16 text-white`}
            >
              <Link href="/authen/login">Sign In</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default SideBar;

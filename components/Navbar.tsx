"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { HoverCard, Group } from "@mantine/core";
import { getAuth } from "firebase/auth";
import initFirebaseApp from "@/utils/firebase/config";
import { AuthContext } from "@/utils/AuthContext";

export default function Navbar() {
  const router = useRouter();
  const { user }: any = useContext(AuthContext);

  const auth = getAuth(initFirebaseApp);

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
    <nav className="">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-6">
        {/* logo part */}

        <Link href="/">
          <h2 className="font-fugaze">SmartPix</h2>
        </Link>

        {/* right part */}
        <ul className="flex space-x-8 items-center">
          <li
            className={`${
              pathname === "/showcase" ? "p2-bold-16" : "p2-regular-16"
            }`}
          >
            <Link href="/showcase">Showcase</Link>
          </li>
          <li
            className={`${
              pathname === "/pricing" ? "p2-bold-16" : "p2-regular-16"
            }`}
          >
            Pricing
          </li>
          <li
            className={`${
              pathname === "/playground" ? "p2-bold-16" : "p2-regular-16"
            }`}
          >
            <Link href="/playground/texttoimage">Playground</Link>
          </li>
          {!user ? (
            <li>
              <button
                className="primary-button !px-6"
                type="button"
                onClick={() => router.push("/authen/login")}
              >
                Login
              </button>
            </li>
          ) : (
            <Group position="center">
              <HoverCard width={180} shadow="md">
                <HoverCard.Target>
                  <button className="flex items-center text-gray-800 hover:text-black">
                    <p className="flex space-x-3 items-center">
                      <Image
                        src={user?.photoURL}
                        alt="userprofile"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <span>{user?.displayName}</span>
                    </p>
                  </button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <div className="">
                    <button className="flex items-center p-2 hover:bg-gray-100 w-full">
                      <span className="text-gray-800">Profile</span>
                    </button>
                    <button className="flex items-center p-2 hover:bg-gray-100 w-full">
                      <span className="text-gray-800">Settings</span>
                    </button>
                    <button
                      className="flex items-center p-2 hover:bg-gray-100 w-full"
                      type="button"
                      onClick={logout}
                    >
                      <span className="text-gray-800">Logout</span>
                    </button>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          )}
        </ul>
      </div>
    </nav>
  );
}

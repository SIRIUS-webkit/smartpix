"use client";

import { useState } from "react";
import "./globals.css";
import { Lato } from "next/font/google";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { AuthContextProvider } from "@/utils/AuthContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SideBar from "@/components/SideBar";

const lato = Lato({ subsets: ["latin"], weight: ["400", "900", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname: string = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <html lang="en">
      <Head>
        <title>SmartPix</title>
        <meta name="SmartPix" content="Ai created this app" />
      </Head>
      <body className={lato.className}>
        <AuthContextProvider>
          {!pathname.includes("playground") ? (
            <>
              <Navbar /> <main>{children}</main>
            </>
          ) : (
            <main className="">
              <SideBar open={open} setOpen={setOpen} />
              <div
                className={`h-screen ${
                  open ? "ml-[320px]" : "ml-16"
                } mr-9 duration-300 flex-1 p-7`}
              >
                {children}
              </div>
            </main>
          )}
        </AuthContextProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}

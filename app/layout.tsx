import "./globals.css";
import { Lato } from "next/font/google";
// import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { AuthContextProvider } from "@/utils/AuthContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SideBar from "@/components/SideBar";

const lato = Lato({ subsets: ["latin"], weight: ["400", "900", "700"] });

export const metadata = {
  title: "SmartPix",
  description: "Ai created this app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname: string = usePathname();
  return (
    <html lang="en">
      <body className={lato.className}>
        <AuthContextProvider>
          {/* {!pathname.includes("playground") ? (
            <>
              <Navbar /> <main>{children}</main>
            </>
          ) : (
            <main className="flex">
              <SideBar />
              <div className="h-screen flex-1 p-7">{children}</div>
            </main>
          )} */}
          <Navbar />
          <main className="flex">
            <SideBar />
            <div className="h-screen flex-1 p-7">{children}</div>
          </main>
        </AuthContextProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}

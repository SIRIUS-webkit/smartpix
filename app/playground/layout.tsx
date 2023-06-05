import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SmartPix: Empowering AI-Powered Creativity with Text-to-Image Generation, Object Detection, Image Classification, and Model Training",
  description:
    "Unlock the potential of AI with SmartPix - a cutting-edge platform that harnesses the power of artificial intelligence. Transform text into stunning images, detect objects with precision, classify images accurately, and train models effortlessly. Explore the limitless possibilities of AI-driven creativity with SmartPix.",
  icons: {
    icon: "/newlogo.png",
  },
  openGraph: {
    title:
      "SmartPix: Empowering AI-Powered Creativity with Text-to-Image Generation, Object Detection, Image Classification, and Model Training",
    description:
      "Unlock the potential of AI with SmartPix - a cutting-edge platform that harnesses the power of artificial intelligence. Transform text into stunning images, detect objects with precision, classify images accurately, and train models effortlessly. Explore the limitless possibilities of AI-driven creativity with SmartPix.",
    url: "https://smartpix.vercel.app/",
    images: [
      {
        url: "/smartpixmeta.png",
        width: 1200,
        height: 628,
        alt: "smartpix",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PlaygroundLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

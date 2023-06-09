import React from "react";
import { Metadata } from "next";
import showcaseimages from "@/utils/getShowcaseImage";
import ShowcaseCard from "@/components/ShowcaseCard";

export const metadata: Metadata = {
  title:
    "SmartPix: Empowering AI-Powered Creativity with Text-to-Image Generation, Object Detection, Image Classification, and Model Training",
  description:
    "Unlock the potential of AI with SmartPix - a cutting-edge platform that harnesses the power of artificial intelligence. Transform text into stunning images, detect objects with precision, classify images accurately, and train models effortlessly. Explore the limitless possibilities of AI-driven creativity with SmartPix.",
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

function ShowCase() {
  return (
    <div className="mdmin1050:py-32 py-16 max-w-[1100px] mdmin1050:mx-auto mx-5">
      <div>
        <h2 className="text-center font-[900]">Explore AI Generated Art</h2>
        <p className="p2-regular-16 text-disable mt-4 text-center">
          View stunning AI artworks created using SmartPix&apos;s cutting-edge
          algorithms
        </p>
        <div className="grid grid-cols-12 gap-8 mt-44 items-stretch">
          {showcaseimages.map((showcase) => (
            <ShowcaseCard data={showcase} key={showcase.id} />
          ))}
        </div>
        <div className="my-28 text-center">
          <p className="p1-regular-18">
            Curious about browsing countless images like these and crafting some
            of your own?
          </p>
          <a
            href="/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="p1-regular-18 text-info hover:text-primary underline"
          >
            Join our community as a paid member
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;

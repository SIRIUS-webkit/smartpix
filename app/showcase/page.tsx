import React from "react";
import showcaseimages from "@/utils/getShowcaseImage";
import ShowcaseCard from "@/components/ShowcaseCard";

function ShowCase() {
  return (
    <div className="py-32 max-w-[1100px] mx-auto">
      <div>
        <h3 className="text-center font-[900]">Explore AI Generated Art</h3>
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
            href="http://"
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

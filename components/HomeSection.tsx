"use client";
import React, { useRef } from "react";
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

function HomeSection(): React.JSX.Element {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <div className="relative max-w-6xl mx-auto ">
      <div className="relative grid grid-cols-12 gap-3 items-center pb-[9em] pt-[7em]">
        <div className="col-span-7">
          <h1 className="font-bold gradient-text">
            Unlock the Power of Intelligent Imaging
          </h1>
          <p className="p2-regular-16 mt-5 mb-9">
            Unleash your creativity: Convert text to captivating images using
            our powerful APIs. <br />
            Detect, classify objects, train models, and showcase your vision to
            the world!
          </p>
          <button className="primary-button">Try it Now</button>
        </div>
        <div className="col-span-5">
          <Carousel
            height={400}
            mx="auto"
            loop
            withControls={false}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide>
              {" "}
              <Image
                src="/assets/themestyle/anime.png"
                alt="text-image"
                radius="md"
                height={400}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src="/assets/themestyle/comic.png"
                alt="text-image"
                radius="md"
                height={400}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src="/assets/themestyle/figure.jpeg"
                alt="text-image"
                radius="md"
                height={400}
              />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </div>
      </div>
      <div className="relative w-full mt-[20px] h-[780px] lg:block sm:hidden">
        <div className="absolute top-[6px] left-[52px] w-[180px] h-[180px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[44px] left-[506px] w-[276px] h-[276px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[8px] right-[52px] w-[180px] h-[180px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[288px] left-[8px] w-[200px] h-[200px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[258px] left-[298px] w-[150px] h-[150px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[258px] left-[898px] w-[150px] h-[150px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[558px] left-[108px] w-[180px] h-[180px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[458px] left-[408px] w-[140px] h-[140px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[458px] left-[708px] w-[140px] h-[140px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[458px] right-[8px] w-[210px] h-[210px]">
          <Image
            src="/assets/themestyle/anime.png"
            alt="text-image"
            radius="md"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;

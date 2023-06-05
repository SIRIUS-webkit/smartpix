"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

function HomeSection(): React.JSX.Element {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const router = useRouter();

  return (
    <div className="relative max-w-6xl mdmin1050:mx-auto mx-5 md:pb-[4em] pb-[2em]">
      <div className="relative grid grid-cols-12 gap-3 items-center md:pb-[9em] pb-[3em] md:pt-[7em] pt-[5em]">
        <div className="mdmin1050:col-span-7 col-span-12">
          <h1 className="font-bold gradient-text">
            Unlock the Power of Intelligent Imaging
          </h1>
          <p className="p2-regular-16 mt-5 mb-9">
            Unleash your creativity: Convert text to captivating images using
            our powerful APIs. <br />
            Detect, classify objects, train models, and showcase your vision to
            the world!
          </p>
          <button
            className="primary-button"
            type="button"
            onClick={() => router.push("/playground/texttoimage")}
          >
            Try it Now
          </button>
        </div>
        <div className="mdmin1050:col-span-5 col-span-12 md:max-w-full sm:max-w-[60%] sm:mx-auto max-w-full mdmin1050:mt-0 mt-[4em]">
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
                src="/assets/slider/Baby Groot.png"
                alt="text-image"
                radius="md"
                height={400}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src="/assets/slider/lake.png"
                alt="text-image"
                radius="md"
                height={400}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src="/assets/slider/group.png"
                alt="text-image"
                radius="md"
                height={400}
              />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </div>
      </div>
      <div className="relative w-full mt-[20px] h-[780px] mdmin1050:block hidden">
        <div className="absolute top-[6px] left-[52px] w-[180px] h-[180px]">
          <Image src="/assets/home/cat.png" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[44px] left-[506px] w-[276px] h-[276px]">
          <Image src="/assets/home/sushi.png" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[8px] right-[52px] w-[180px] h-[180px]">
          <Image src="/assets/home/nature.png" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[288px] left-[8px] w-[200px] h-[200px]">
          <Image src="/assets/home/sea.png" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[258px] left-[298px] w-[150px] h-[150px]">
          <Image src="/assets/home/whale.png" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[258px] left-[898px] w-[150px] h-[150px]">
          <Image src="/assets/home/lakeillu.jpg" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[558px] left-[108px] w-[180px] h-[180px]">
          <Image src="/assets/home/heaven.png" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[458px] left-[408px] w-[140px] h-[140px]">
          <Image src="/assets/home/tort.png" alt="text-image" radius="md" />
        </div>
        <div className="absolute top-[458px] left-[708px] w-[140px] h-[140px]">
          <Image
            src="/assets/home/underground.png"
            alt="text-image"
            radius="md"
          />
        </div>
        <div className="absolute top-[458px] right-[8px] w-[210px] h-[210px]">
          <Image src="/assets/home/giff.png" alt="text-image" radius="md" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;

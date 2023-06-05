"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Image } from "@mantine/core";

function ProdcutCase() {
  const router = useRouter();

  return (
    <div>
      <div className="grid grid-cols-12 gap-5 mdmin1050:pt-[8em] pt-[3em] items-center">
        <div className="mdmin1050:col-span-6 col-span-12 flex flex-col space-y-5">
          <h3 className="font-bold">Stoke the fire of your imagination</h3>
          <p className="p2-regular-16">
            Our groundbreaking model surpasses traditional{" "}
            <span className="gradient-text">diffusion models</span>. It
            generates photorealistic images from text, fosters independent
            creativity with remarkable visuals, and empowers individuals to
            create breathtaking artwork effortlessly and instantly.
          </p>
          <div>
            <button
              className="primary-button"
              type="button"
              onClick={() => router.push("/playground/texttoimage")}
            >
              Generate Now
            </button>
          </div>
        </div>
        <div className="mdmin1050:col-span-6 col-span-12 mdmin1050:mt-0 mt-[2em]">
          <div className="mdmin1050:max-w-[80%] sm:max-w-[40%] max-w-full mdmin1050:ml-[100px] mx-auto bg-white rounded-md">
            <Image src="/assets/home/textto.jpg" alt="text-image" radius="md" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mdmin1050:pt-[8em] pt-[3em] items-center">
        <div className="mdmin1050:col-span-6 col-span-12 mdmin1050:order-1 order-2 mdmin1050:mt-0 mt-[2em]">
          <div className="mdmin1050:max-w-[80%] sm:max-w-[40%] max-w-full mdmin1050:mr-[100px] mx-auto bg-white rounded-md">
            <Image
              src="/assets/home/objectdetect.png"
              alt="text-image"
              radius="md"
            />
          </div>
        </div>
        <div className="mdmin1050:col-span-6 col-span-12 flex flex-col space-y-5 mdmin1050:order-2 order-1">
          <h3 className="font-bold">
            Illuminate your visuals with AI brilliance
          </h3>
          <p className="p2-regular-16">
            Experience the next level of image analysis with our advanced
            AI-powered image classification and object detection features with{" "}
            <span className="gradient-text">DETER and CVL models</span>. Unlock
            valuable insights, streamline processes, and captivate your audience
            with precise identification and comprehensive understanding of
            visual content.
          </p>
          <div>
            <button
              className="primary-button"
              type="button"
              onClick={() => router.push("/playground/objectdetection")}
            >
              Generate Now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mdmin1050:pt-[8em] pt-[3em] items-center">
        <div className="mdmin1050:col-span-6 col-span-12 flex flex-col space-y-5">
          <h3 className="font-bold">
            Empower your data with AI model training
          </h3>
          <p className="p2-regular-16">
            Harness the power of our platform to enable user-driven AI model
            training. Empower your data to train, fine-tune, and customize AI
            models according to your unique needs. Unlock unlimited
            possibilities and drive innovation by putting the control of AI
            model development directly into the hands of your data.
          </p>
          <div>
            <button className="primary-button">Generate Now</button>
          </div>
        </div>
        <div className="mdmin1050:col-span-6 col-span-12 mdmin1050:mt-0 mt-[2em]">
          <div className="mdmin1050:max-w-[80%] sm:max-w-[40%] max-w-full mdmin1050:ml-[100px] mx-auto bg-white rounded-md">
            <Image src="/assets/home/model.jpg" alt="text-image" radius="md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdcutCase;

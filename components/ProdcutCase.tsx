"use client";

import React from "react";
import { Image } from "@mantine/core";

function ProdcutCase() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 pt-[8em] items-center">
        <div className="flex flex-col space-y-5">
          <h3 className="font-bold">Stoke the fire of your imagination</h3>
          <p className="p2-regular-16">
            Our groundbreaking model surpasses traditional{" "}
            <span className="gradient-text">diffusion models</span>. It
            generates photorealistic images from text, fosters independent
            creativity with remarkable visuals, and empowers individuals to
            create breathtaking artwork effortlessly and instantly.
          </p>
          <div>
            <button className="primary-button">Generate Now</button>
          </div>
        </div>
        <div>
          <div className="max-w-[80%] ml-auto">
            <Image
              src="/assets/themestyle/comic.png"
              alt="text-image"
              radius="md"
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 pt-[8em] items-center">
        <div>
          <div className="max-w-[80%] mr-auto">
            <Image
              src="/assets/themestyle/comic.png"
              alt="text-image"
              radius="md"
              height={350}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h3 className="font-bold">
            Illuminate your visuals with AI brilliance
          </h3>
          <p className="p2-regular-16">
            Experience the next level of image analysis with our advanced
            AI-powered image classification and object detection features.
            Unlock valuable insights, streamline processes, and captivate your
            audience with precise identification and comprehensive understanding
            of visual content.
          </p>
          <div>
            <button className="primary-button">Generate Now</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 pt-[8em] items-center">
        <div className="flex flex-col space-y-5">
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
        <div>
          <div className="max-w-[80%] ml-auto">
            <Image
              src="/assets/themestyle/comic.png"
              alt="text-image"
              radius="md"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdcutCase;

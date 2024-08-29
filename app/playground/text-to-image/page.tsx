"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/utils/AuthContext";
import TextToImage from "@/components/TextToImage";
import Title from "@/components/Title";
import { prefetchModel } from "@/utils/common";

function Playground() {
  const router = useRouter();
  const { user }: any = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      prefetchModel(
        `${process.env.texttoimageAPI}/${process.env.texttoimageMODEL}`
      );
    }
  }, []);

  return (
    <div>
      {user === null ? (
        <div className="max-w-[70%] mx-auto flex flex-col items-center text-center mt-[100px]">
          <h2 className="font-bold">
            Step into a world of boundless creativity!
          </h2>
          <p className="p2-regular-16">
            Watch your prompts turn into beautiful designs, images, and
            artworks. SmartPix brings your ideas to life.
          </p>
          <button
            type="button"
            onClick={() => router.push("/authen/login")}
            className="primary-button mt-[60px] flex items-center"
          >
            Login
          </button>
        </div>
      ) : (
        <>
          <Title
            title="Text to Image Generator"
            subTitle="Visualize Your Ideas: Unlock the Power of Text-to-Image AI, Transform Words into Captivating Images!"
          />
          <TextToImage />
        </>
      )}
    </div>
  );
}

export default Playground;

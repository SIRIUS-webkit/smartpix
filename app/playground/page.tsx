"use client";
import React, { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/utils/AuthContext";
import TextToImage from "@/components/TextToImage";
import Title from "@/components/Title";

function Playground() {
  const { user }: any = useContext(AuthContext);

  const router = useRouter();

  // useEffect(() => {
  //   if (user == null) router.push("/");
  // }, [user]);

  return (
    <div>
      <Title
        title="Text to Image Generator"
        subTitle="Visualize Your Ideas: Unlock the Power of Text-to-Image AI, Transform Words into Captivating Images!"
      />
      <TextToImage />
    </div>
  );
}

export default Playground;

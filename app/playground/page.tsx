"use client";
import React, { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../utils/AuthContext";
import TextToImage from "../components/TextToImage";
import Title from "../components/Title";

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
        subTitle="Start creat with your ideas!"
      />
      <TextToImage />
    </div>
  );
}

export default Playground;

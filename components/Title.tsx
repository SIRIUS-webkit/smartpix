"use client";
import React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
}

function Title({ title, subTitle }: TitleProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-[2em] mb-[3em]">
      <h3 className="font-[700] text-center">{title}</h3>
      <p className="p2-regular-16 mdmin1050:max-w-[40%] max-w-full mx-auto text-center mt-2">
        {subTitle}
      </p>
    </div>
  );
}

export default Title;

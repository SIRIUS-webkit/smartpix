"use client";
import React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
}

function Title({ title, subTitle }: TitleProps) {
  return (
    <div className="flex flex-col justify-center items-center my-[4em]">
      <h3 className="font-[700]">{title}</h3>
      <p className="p2-regular-16">{subTitle}</p>
    </div>
  );
}

export default Title;

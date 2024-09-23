"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/utils/AuthContext";
import Title from "@/components/Title";
import Translation from "@/components/Translation";
import { prefetchModel } from "@/utils/common";

function TranslationPage() {
  const router = useRouter();
  const { user }: any = useContext(AuthContext);

  //   useEffect(() => {
  //     prefetchModel(
  //       `${process.env.texttoimageAPI}/${process.env.texttoimageMODEL}`
  //     );
  //   }, []);

  return (
    <div>
      {user === null ? (
        <div className="max-w-[70%] mx-auto flex flex-col items-center text-center mt-[100px]">
          <h2 className="font-bold">
            Step into a world of boundless creativity!
          </h2>
          <p className="p2-regular-16">
            Watch your prompts turn into translation. SmartPix brings your ideas
            to life.
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
            title="Translation"
            subTitle="Translate Your Ideas into SmartPix's Desirable Languages and Boosted At Your Business."
          />
          <Translation />
        </>
      )}
    </div>
  );
}

export default TranslationPage;

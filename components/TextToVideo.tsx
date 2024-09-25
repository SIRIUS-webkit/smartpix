"use client";
import React, { useState, useRef, useEffect } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { IoMdLock } from "react-icons/io";
import { randPrompts, themeStyleImages } from "@/utils/common";
import { useDisclosure } from "@mantine/hooks";

function TextVideo() {
  const [imageUrl, setImageUrl] = useState<string>();
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const schemaValidate = Yup.object().shape({
    prompt: Yup.string()
      .nullable()
      .required("Prompt is required")
      .max(120, "The prompt must not exceed more than 120 characters."),
  });

  const form = useForm({
    initialValues: {
      prompt: "",
    },
    validate: yupResolver(schemaValidate),
  });

  useEffect(() => {
    if (imageUrl && videoRef.current) {
      videoRef.current.src = imageUrl;
      videoRef.current.style.display = "block"; // Ensure video is visible
    }
  }, [imageUrl]);

  const generateData = async (data: string) => {
    // Clear any previous image/video and start loading
    setImageUrl("");
    setApiLoading(true);

    try {
      const response = await fetch(
        `${process.env.texttovideoAPI}/generate-video`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: data }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch video");
      }

      const blob = await response.blob();

      // Make sure the video element is selected and cast as HTMLVideoElement
      setImageUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error generating video:", error);
    } finally {
      setApiLoading(false); // Ensure loading state is disabled at the end
    }
  };

  const setRandPrompt = (): void => {
    const prompts: string[] = randPrompts();
    const randomIndex: number = Math.floor(Math.random() * prompts.length);
    form.setFieldValue("prompt", prompts[randomIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-12 mdmin1050:gap-[50px] gap-0">
        <div
          className={`mdmin1050:col-span-6 col-span-12 w-full ${
            apiLoading ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <form
            onSubmit={form.onSubmit((values) => generateData(values.prompt))}
          >
            <TextInput
              withAsterisk
              label="Prompt"
              placeholder="Your prompt"
              {...form.getInputProps("prompt")}
            />
            <div className="flex justify-end my-2 ">
              <button
                type="button"
                className="text-info p2-regular-16"
                onClick={setRandPrompt}
              >
                Set random prompt
              </button>
            </div>
            <div className="flex justify-center items-center my-8">
              <button
                type="submit"
                className={`primary-button ${
                  apiLoading ? "cursor-not-allowed" : null
                }`}
                disabled={apiLoading}
              >
                {apiLoading ? "Generating..." : "Generate"}
              </button>
            </div>
          </form>
        </div>
        <div className="mdmin1050:col-span-6 col-span-12">
          <p className="p2-bold-16 font-bold">Art Preview</p>

          <div className="grid grid-cols-12 gap-5 mt-6">
            {imageUrl ? (
              <div className="relative w-full h-[200px] mdmin720:col-span-6 col-span-12 rounded-lg">
                <video
                  ref={videoRef}
                  controls
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                ></video>
              </div>
            ) : (
              <div className="w-full h-[200px]  bg-main-gradient mdmin720:col-span-6 col-span-12 rounded-lg flex justify-center items-center">
                {apiLoading ? (
                  <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                  </div>
                ) : null}
              </div>
            )}

            <div className="w-full h-[200px] bg-main-gradient mdmin720:col-span-6 col-span-12 rounded-lg flex flex-col justify-center items-center">
              <IoMdLock className="text-white" />
              <p className="p3-bold-14 text-white">PREMIUM</p>
            </div>
            <div className="w-full h-[200px] bg-main-gradient mdmin720:col-span-6 col-span-12 rounded-lg flex flex-col justify-center items-center">
              <IoMdLock className="text-white" />
              <p className="p3-bold-14 text-white">PREMIUM</p>
            </div>
            <div className="w-full h-[200px] bg-main-gradient mdmin720:col-span-6 col-span-12 rounded-lg flex flex-col justify-center items-center">
              <IoMdLock className="text-white" />
              <p className="p3-bold-14 text-white">PREMIUM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextVideo;

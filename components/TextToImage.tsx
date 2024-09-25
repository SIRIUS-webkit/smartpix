"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { TextInput, ScrollArea, Image, Indicator } from "@mantine/core";
import { IoMdLock } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { randPrompts, themeStyleImages } from "@/utils/common";
import { useDisclosure } from "@mantine/hooks";
import PreviewModal from "./PreviewModal";
import ModalLoading from "./ModalLoading";

interface propsThemsImage {
  id: number;
  url: string;
  text: string;
}

function TextToImage() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [apiLoading, setApiLoading] = useState<boolean>(false);

  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, handlers2] = useDisclosure(false);

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

  const generateData = async (data: string) => {
    setImageUrl("");
    setApiLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.huggingTOKEN}`,
        },
        body: JSON.stringify({ inputs: data }),
      });

      const result = await res.json();

      // Handle model loading
      if (
        res.status === 503 &&
        result.message.includes("Model is currently loading")
      ) {
        handlers2.open(); // Open your modal here
        console.log(
          `Model loading. Please try again in ${result.estimated_time} seconds`
        );
      }

      // Handle success
      if (res.ok) {
        setImageUrl(result.data); // Set the image URL to the base64 data
        form.setFieldValue("prompt", "");
      }

      // Handle other errors
      if (!res.ok && res.status !== 503) {
        console.error(result.message); // Log the error message
      }
    } catch (error) {
      console.error("Error generating data:", error);
    } finally {
      setApiLoading(false);
    }
  };

  const setRandPrompt = (): void => {
    const prompts: string[] = randPrompts();
    const randomIndex: number = Math.floor(Math.random() * prompts.length);
    form.setFieldValue("prompt", prompts[randomIndex]);
  };

  const downloadImage = () => {
    // Convert base64 image to a Blob object
    const byteString = atob(imageUrl.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: "image/png" });

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "smart-pix";

    // Simulate a click event on the download link
    downloadLink.click();

    // Clean up the URL object
    URL.revokeObjectURL(downloadLink.href);
  };

  return (
    <>
      <ModalLoading opened={opened2} close={handlers2.close} />
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
            <div>
              <p className="p2-bold-16 font-bold mb-3">Art Style</p>
              <ScrollArea h={250}>
                <div className="grid grid-cols-12 gap-3 relative rounded-md">
                  {themeStyleImages().map((item: propsThemsImage) => (
                    <div
                      key={item.id}
                      className="w-full text-center mdmin720:col-span-3 col-span-6 cursor-pointer relative rounded-md"
                    >
                      <Indicator
                        inline
                        label="Premium"
                        position="bottom-center"
                        size={16}
                      >
                        <div className="w-full overflow-hidden rounded-md">
                          <Image
                            src={`/assets/themestyle/${item.url}`}
                            height={100}
                            alt="show"
                            radius="md"
                            className="object-cover hover:scale-150 duration-500 transition-all"
                          />
                        </div>
                      </Indicator>

                      <p className="text-center p4-bold-12 mt-[3px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="flex justify-center items-center my-8">
              <button
                type="submit"
                className={`primary-button ${
                  apiLoading ? "cursor-not-allowed" : null
                }`}
                disabled={apiLoading}
              >
                {apiLoading ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
        <div className="mdmin1050:col-span-6 col-span-12">
          <p className="p2-bold-16 font-bold">Art Preview</p>
          <div className="grid grid-cols-12 gap-5 mt-6">
            {imageUrl ? (
              <div className="relative w-full h-[200px] mdmin720:col-span-6 col-span-12 rounded-lg">
                <Image
                  src={imageUrl}
                  alt="result"
                  height={200}
                  radius="md"
                  className="w-full h-full object-cover"
                />
                <div>
                  <div
                    className="absolute right-12 bottom-4 bg-gray-500 p-1 rounded-full cursor-pointer"
                    onClick={downloadImage}
                  >
                    <AiOutlineDownload className="text-white text-[16px]" />
                  </div>
                  <div
                    className="absolute right-4 bottom-4 bg-gray-500 p-1 rounded-full cursor-pointer"
                    onClick={open}
                  >
                    <MdZoomOutMap className="text-white text-[16px]" />
                  </div>
                </div>
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
      <PreviewModal url={imageUrl} opened={opened} close={close} open={open} />
    </>
  );
}

export default TextToImage;

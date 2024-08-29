"use client";
/* eslint-disable */

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { LoadingOverlay } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import Title from "@/components/Title";
import ImageUpload from "@/components/ImageUpload";

type Box = {
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
};

type Item = {
  score: number;
  label: string;
  box: Box;
  color: string;
};

type ImageWithRectanglesProps = {
  data: Item[];
};

type InputDataItem = {
  url: string;
  name: string;
  binary: Uint8Array;
  // Add other properties if needed
};

function ObjectDetection() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const [rectData, setRectData] = useState<Item[]>([]);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [apiLoading, setApiLoading] = useState(false);

  const schemaValidate = Yup.object().shape({
    inputData: Yup.array().min(1).required(),
  });

  const form = useForm<{
    inputData: InputDataItem[]; // Specify the type as InputDataItem[]
  }>({
    initialValues: {
      inputData: [] as InputDataItem[],
    },
    validate: yupResolver(schemaValidate),
  });

  const detectObject = async (data: any) => {
    setRectData([]);
    setApiLoading(true);
    const res = await fetch(
      `${process.env.texttoimageAPI}/${process.env.objectdetectionMODEL}`,
      {
        headers: {
          "Content-Type": "image/*",
          Authorization: `Bearer ${process.env.huggingTOKEN}`,
        },
        method: "POST",
        body: data.inputData[0].binary,
      }
    );

    if (res.status) {
      const result = await res.json();
      const updatedResult = result?.map((item: Item) => ({
        ...item,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      }));
      scrollIntoView({
        alignment: "center",
      });
      setRectData(updatedResult);

      updateImageDimensions(data.inputData[0].url);
    }
    setApiLoading(false);
  };

  const updateImageDimensions = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  };

  const drawRectangles = (data: Item[]) => {
    return data.map((item, index) => {
      const { xmin, ymin, xmax, ymax } = item.box;
      const width = xmax - xmin;
      const height = ymax - ymin;

      return (
        <rect
          key={index}
          x={xmin}
          y={ymin}
          width={width}
          height={height}
          stroke={item.color}
          strokeWidth="3"
          fill="transparent"
        />
      );
    });
  };

  useEffect(() => {
    if (form.values.inputData.length > 0) {
      updateImageDimensions(form.values.inputData[0].url);
    }
    setRectData([]);
  }, [form.values.inputData]);

  const getWidth = (sc: number): string => {
    const toFix: number = Number(sc.toFixed(2));
    const pec: string = toFix * 100 + "%";

    return pec;
  };

  return (
    <div>
      <Title
        title="Object Detection"
        subTitle="See Beyond Limits: Embrace Object Detection AI, Unleash Precision in Visual Recognition!"
      />
      <div className="grid grid-cols-12 mdmin1050:gap-[50px] gap-0">
        <div className="mdmin1050:col-span-6 col-span-12">
          <form onSubmit={form.onSubmit((values) => detectObject(values))}>
            <ImageUpload
              form={form}
              name="inputData"
              loading={apiLoading}
              previewText="was uploaded and ready to detect."
            />

            <p className="text-negative p2-regular-16">
              {form.errors.inputData}
            </p>
            <div className="flex justify-end my-9">
              <button
                type="submit"
                className="primary-button"
                disabled={apiLoading}
              >
                Detect
              </button>
            </div>
          </form>
        </div>
        <div className="mdmin1050:col-span-6 col-span-12">
          <div>
            {form.values.inputData.length === 0 ? (
              <div className="w-full h-[300px] bg-main-gradient rounded-md"></div>
            ) : (
              <>
                <div className="relative border-dashed rounded-md border-[0.125em] border-[#ced4da] bg-white flex justify-center items-center py-9">
                  <LoadingOverlay visible={apiLoading} overlayBlur={1} />
                  <div className="relative top-0 left-0 inline-flex ">
                    <div className="flex justify-center max-w-sm">
                      <img
                        alt=""
                        className="relative top-0 left-0 object-contain"
                        src={form.values.inputData[0].url}
                      />
                    </div>
                    <svg
                      className="absolute top-0 left-0"
                      viewBox={`0 0 ${imageDimensions.width} ${imageDimensions.height}`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {drawRectangles(rectData)}
                    </svg>
                  </div>
                </div>
                <div
                  className="space-y-3.5 pt-4 mt-9 mb-[100px]"
                  ref={targetRef}
                >
                  {rectData.map((innerItem) => (
                    <div
                      key={innerItem.color}
                      className="flex items-start justify-between font-lato text-base leading-none animate__animated animate__fadeIn transition duration-200 ease-in-out false"
                    >
                      <div className="flex-1">
                        <div
                          className="h-1 mb-1 rounded"
                          style={{
                            width: getWidth(innerItem.score),
                            backgroundColor: innerItem.color,
                          }}
                        />
                        <span className="leading-snug">{innerItem.label}</span>
                      </div>
                      <span className="pl-2">{innerItem.score.toFixed(2)}</span>{" "}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObjectDetection;

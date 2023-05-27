"use client";
/* eslint-disable */

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { LoadingOverlay } from "@mantine/core";
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

function ObjectDetection() {
  const [rectData, setRectData] = useState<Item[]>([]);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [apiLoading, setApiLoading] = useState(false);

  const schemaValidate = Yup.object().shape({
    inputData: Yup.array().min(1).required(),
  });

  const form = useForm({
    initialValues: {
      inputData: [],
    },
    validate: yupResolver(schemaValidate),
  });

  const detectObject = async (data: any) => {
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
          strokeWidth="2"
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

    return `!w-${pec}`;
  };

  return (
    <div>
      <Title title="Object Detection" subTitle="Start creat with your ideas!" />
      <div className="grid grid-cols-12 gap-[50px]">
        <div className="col-span-6">
          <form onSubmit={form.onSubmit((values) => detectObject(values))}>
            <ImageUpload form={form} name="inputData" loading={apiLoading} />
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
        <div className="col-span-6">
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
                <div className="space-y-3.5 pt-4 my-9">
                  {rectData.map((innerItem) => (
                    <div
                      key={innerItem.color}
                      className="flex items-start justify-between font-mono text-xs leading-none animate__animated animate__fadeIn transition duration-200 ease-in-out false"
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

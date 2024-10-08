"use client";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { LoadingOverlay, Modal } from "@mantine/core";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import Title from "@/components/Title";
import ImageUpload from "@/components/ImageUpload";
import { prefetchModel } from "@/utils/common";
import ModalLoading from "@/components/ModalLoading";

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

function ImageCalssification() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const [rectData, setRectData] = useState<Item[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
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

  const classifyObject = async (data: any) => {
    setRectData([]);
    setApiLoading(true);

    try {
      const res = await fetch(
        `${process.env.texttoimageAPI}/${process.env.imageclassificationMODEL}`,
        {
          headers: {
            "Content-Type": "image/*",
            Authorization: `Bearer ${process.env.huggingTOKEN}`,
          },
          method: "POST",
          body: data.inputData[0].binary,
        }
      );
      if (res.status === 503) {
        open();
        setApiLoading(false);
      }

      if (res.ok) {
        const result = await res.json();
        const randColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;

        const updatedResult = result?.map((item: Item) => ({
          ...item,
          color: randColor,
        }));

        scrollIntoView({
          alignment: "center",
        });
        setRectData(updatedResult);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("Error during classification:", error);
    }

    setApiLoading(false);
  };

  useEffect(() => {
    prefetchModel(
      `${process.env.texttoimageAPI}/${process.env.imageclassificationMODEL}`
    );
  }, []);

  useEffect(() => {
    setRectData([]);
  }, [form.values.inputData]);

  const getWidth = (sc: number): string => {
    const toFix: number = Number(sc.toFixed(4));
    const pec: string = toFix * 100 + "%";

    return pec;
  };
  return (
    <div>
      <ModalLoading opened={opened} close={close} />
      <Title
        title="Image Classification"
        subTitle="Unleash Visual Insight: Harness Image Classification AI, Decode the World through Pixels!"
      />
      <div className="grid grid-cols-12 mdmin1050:gap-[50px] gap-0">
        <div className="mdmin1050:col-span-6 col-span-12">
          <form onSubmit={form.onSubmit((values) => classifyObject(values))}>
            <ImageUpload
              form={form}
              name="inputData"
              loading={apiLoading}
              previewText="was uploaded and ready to classify."
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
                Classify
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

export default ImageCalssification;

"use client";
import React from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { TextInput, ScrollArea, Image, Indicator } from "@mantine/core";

function TextToImage() {
  const schemaValidate = Yup.object().shape({
    prompt: Yup.string().nullable().required("Prompt is required"),
  });

  const form = useForm({
    initialValues: {
      promt: "",
    },
    validate: yupResolver(schemaValidate),
  });

  return (
    <div className="grid grid-cols-12 gap-[50px]">
      <div className="col-span-6 w-full">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Prompt"
            placeholder="your@email.com"
            {...form.getInputProps("prompt")}
          />
          <div className="flex justify-end my-2 ">
            <button type="button" className="text-info p2-regular-16">
              Set random prompt
            </button>
          </div>
          <div>
            <p className="p2-bold-16 font-bold mb-3">Art Style</p>
            <ScrollArea h={250}>
              <div className="grid grid-cols-12 gap-3 relative rounded-md">
                {[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14].map((item) => (
                  <div
                    key={item}
                    className="w-full  col-span-3 cursor-pointer relative rounded-md"
                  >
                    <Indicator
                      inline
                      label="Premium"
                      position="bottom-center"
                      size={16}
                    >
                      <div className="w-full bg-primary overflow-hidden rounded-md">
                        <Image
                          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                          height={100}
                          alt="show"
                          radius="md"
                          className="object-cover hover:scale-150 duration-500 transition-all"
                        />
                      </div>
                    </Indicator>

                    <p className="text-center p2-regular-16">Art style text</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="flex justify-center items-center my-8">
            <button type="submit" className="primary-button">
              Create
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-6">
        <p className="p2-bold-16 font-bold">Art Preview</p>
        <div className="grid grid-cols-12 gap-5 mt-6">
          <div className="w-full h-[200px] bg-primary col-span-6 rounded-lg" />
          <div className="w-full h-[200px] bg-primary col-span-6 rounded-lg" />
          <div className="w-full h-[200px] bg-primary col-span-6 rounded-lg" />
          <div className="w-full h-[200px] bg-primary col-span-6 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default TextToImage;

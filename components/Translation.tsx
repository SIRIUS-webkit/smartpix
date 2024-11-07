"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { Select, Space, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalLoading from "./ModalLoading";

function Translation() {
  const [responseText, setResponseText] = useState<string>("");
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  const schemaValidate = Yup.object().shape({
    prompt: Yup.string()
      .nullable()
      .required("Prompt is required")
      .max(200, "The prompt must not exceed more than 200 characters."),
  });

  const form = useForm({
    initialValues: {
      prompt: "",
      lang: "jap",
    },
    validate: yupResolver(schemaValidate),
  });

  const generateData = async (data: string, lang: string) => {
    setResponseText("");
    setApiLoading(true);

    const payload = {
      inputs: data,
    };
    const res = await fetch(
      `${process.env.texttoimageAPI}/Helsinki-NLP/opus-mt-en-${lang}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.huggingTOKEN}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    const result = await res.json();
    if (res.status === 503) {
      open();
      setApiLoading(false);
    } else if (res.status === 200) {
      setResponseText(result[0]?.translation_text || "");
    }

    setApiLoading(false);
  };

  return (
    <>
      <ModalLoading opened={opened} close={close} />

      <div className="grid grid-cols-12 mdmin1050:gap-[50px] gap-0">
        <div
          className={`mdmin1050:col-span-6 col-span-12 w-full ${
            apiLoading ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <form
            onSubmit={form.onSubmit((values) =>
              generateData(values.prompt, values.lang)
            )}
          >
            <Select
              label="Target Language"
              placeholder="Pick value"
              data={[
                { value: "jap", label: "Japanese" },
                { value: "zh", label: "Chinese" },
                { value: "ru", label: "Russia" },
                { value: "fr", label: "France" },
                { value: "ar", label: "Arabic" },
              ]}
              {...form.getInputProps("lang")}
            />
            <Space h="md" />
            <Textarea
              withAsterisk
              label="Prompt"
              placeholder="Your prompt"
              {...form.getInputProps("prompt")}
            />
            <div className="flex justify-center items-center my-8">
              <button
                type="submit"
                className={`primary-button ${
                  apiLoading ? "cursor-not-allowed" : null
                }`}
                disabled={apiLoading}
              >
                {apiLoading ? "Translating..." : "Translate"}
              </button>
            </div>
          </form>
        </div>
        <div className="mdmin1050:col-span-6 col-span-12">
          <Textarea
            label="Result"
            placeholder="The result will come here..."
            value={responseText}
          />
        </div>
      </div>
    </>
  );
}

export default Translation;

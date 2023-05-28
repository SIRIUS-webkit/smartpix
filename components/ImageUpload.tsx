"use client";

import { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { GoCloudUpload } from "react-icons/go";
import { UseFormReturnType } from "@mantine/form";
import { TiDelete } from "react-icons/ti";

type InputDataItem = {
  url: string;
  name: string;
  binary: Uint8Array;
  // Add other properties if needed
};

interface ImageUploadProps {
  form: UseFormReturnType<
    { inputData: InputDataItem[] },
    (values: { inputData: InputDataItem[] }) => { inputData: InputDataItem[] }
  >;
  name: string;
  loading: boolean;
  previewText: string;
}

function ImageUpload({ form, name, loading, previewText }: ImageUploadProps) {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const convertBase64 = (link: FileWithPath[]) => {
    link.forEach((data) => {
      const blob = data;
      const reader = new FileReader();

      reader.onloadend = async () => {
        const arrayBuffer: any = reader.result;
        const binaryData = new Uint8Array(arrayBuffer);
        const imageUrl = URL.createObjectURL(new Blob([binaryData]));

        const obj = {
          name: data.name,
          binary: binaryData,
          url: imageUrl,
        };

        form.setFieldValue(name, [obj]);
      };

      reader.readAsArrayBuffer(blob);
    });
  };

  const previews = files.map((file, index) => {
    return (
      <div className="flex flex-col space-y-2 max-w-[90%] mx-auto" key={index}>
        <p className="p2-bold-16" key={file.name}>
          {file.name} {previewText}
        </p>
        <p className="p3-regular-14">
          Immerse in SmartPix&apos;s AI artwork, explore the fusion of
          creativity and technology.
        </p>
      </div>
    );
  });

  const removeImage = () => {
    setFiles([]);
    form.setFieldValue(name, []);
  };

  return (
    <div>
      {files.length === 0 ? (
        <Dropzone
          accept={{ "image/*": [] }}
          onDrop={(acceptedFiles) => {
            setFiles(acceptedFiles);
            convertBase64(acceptedFiles);
          }}
        >
          <div className="flex space-x-5 items-center justify-center py-12">
            <GoCloudUpload className="text-[40px]" />
            <div>
              <p className="p2-regular-16">
                Drage image here or click to select file
              </p>
              <p className="p3-regular-14 text-gray-500">
                The selected file size must not exceed 2Mb.
              </p>
            </div>
          </div>
        </Dropzone>
      ) : (
        <div className="w-full h-[150px] border-dashed rounded-md border-[0.125em] border-[#ced4da] bg-white">
          <div className="relative w-full h-full flex justify-center items-center">
            {previews}
            {!loading ? (
              <div
                className="absolute bottom-3 right-5 flex items-center cursor-pointer"
                onClick={removeImage}
              >
                <TiDelete className="text-[25px] text-negative" />

                <p className="p2-regular-16 text-negative">Remove</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;

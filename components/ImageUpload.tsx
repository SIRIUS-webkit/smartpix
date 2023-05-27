"use client";

import { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { GoCloudUpload } from "react-icons/go";
import { UseFormReturnType } from "@mantine/form";
import { TiDelete } from "react-icons/ti";

interface ImageUploadProps {
  form: UseFormReturnType<
    {
      inputData: never[];
    },
    (values: { inputData: never[] }) => {
      inputData: never[];
    }
  >;
  name: string;
  loading: boolean;
}

function ImageUpload({ form, name, loading }: ImageUploadProps) {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const convertBase64 = (link: FileWithPath[]) => {
    link.forEach((data) => {
      const blob = data;
      const reader = new FileReader();

      reader.onloadend = async () => {
        const arrayBuffer: string | ArrayBuffer | null = reader.result;
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

  const previews = files.map((file) => {
    return (
      <p className="p2-bold-16" key={file.name}>
        {file.name} was uploaded and ready to detect.
      </p>
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
          accept={IMAGE_MIME_TYPE}
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

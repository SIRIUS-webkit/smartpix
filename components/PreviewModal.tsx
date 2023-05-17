import React from "react";
import { Modal, Image } from "@mantine/core";

interface Props {
  url: string;
  opened: boolean;
  open: () => void;
  close: () => void;
}

function PreviewModal({ url, open, close, opened }: Props) {
  return (
    <Modal opened={opened} onClose={close}>
      <div className="flex flex-col space-y-8">
        <h3 className="text-center font-bold">Preview</h3>
        <Image src={url} alt="show" radius="md" className="object-cover" />
      </div>
    </Modal>
  );
}

export default PreviewModal;

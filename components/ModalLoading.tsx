"use client";
import { Modal } from "@mantine/core";
import React from "react";
import { IoIosWarning } from "react-icons/io";

export default function ModalLoading({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  return (
    <Modal opened={opened} onClose={close} withCloseButton={false}>
      <div className="flex space-x-2 items-center">
        <IoIosWarning size="60px" color="#ffcc00" />
        <p className="p3-regular-14">
          {" "}
          The modal is still loading. So, you can try again later after a few
          second.
        </p>
      </div>
    </Modal>
  );
}

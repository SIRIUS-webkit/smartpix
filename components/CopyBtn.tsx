"use client";
import React from "react";
import { AiFillCopy } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { CopyButton, ActionIcon, Tooltip } from "@mantine/core";

interface copyBtnProps {
  link: string;
}

function CopyBtn({ link }: copyBtnProps) {
  return (
    <CopyButton value={link} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
            {copied ? (
              <BsCheck className="text-positive text-[20px]" />
            ) : (
              <AiFillCopy className="text-primary" />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export default CopyBtn;

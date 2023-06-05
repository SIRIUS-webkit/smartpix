"use client";
import React from "react";
import moment from "moment";
import { Card, Image, Avatar } from "@mantine/core";
import { truncateString } from "../utils/common";
import CopyBtn from "./CopyBtn";

type ShowCaseProps = {
  data: {
    id: number;
    url: string;
    prompt: string;
    authorUrl: string;
    time: string;
    name?: string;
  };
};

function ShowcaseCard({ data }: ShowCaseProps) {
  return (
    <div className="mdmin1050:col-span-4 sm:col-span-6 col-span-12 cursor-pointer">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={`/assets/${data.url}`} height={460} alt={data.prompt} />
        </Card.Section>

        <div className="flex justify-between items-center mt-3">
          <p className="p2-regular-16">{truncateString(data.prompt, 30)}</p>
          <CopyBtn link={data.prompt} />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4 items-center">
            <Avatar radius="xl" src={data.authorUrl} alt={data.prompt} />

            <p>{data.name}</p>
          </div>
          <p>{moment(data.time).fromNow()}</p>
        </div>
      </Card>
    </div>
  );
}

export default ShowcaseCard;

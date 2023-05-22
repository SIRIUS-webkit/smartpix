"use client";
import React from "react";
import { Accordion } from "@mantine/core";

interface AccordionListProps {
  id: number;
  title: string;
  text: string;
}

function AccordionList({ data }: { data: AccordionListProps[] }) {
  return (
    <Accordion>
      {data.map((item) => (
        <Accordion.Item key={item.id} value={item.title}>
          <Accordion.Control>
            <p className="p1-bold-18">{item.title}</p>
          </Accordion.Control>
          <Accordion.Panel>
            <p className="p2-regular-16">{item.text}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionList;

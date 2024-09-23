import { NextResponse } from "next/server";
import { Client } from "@gradio/client";

type Props = {
  inputs: string;
};
export async function POST(request: Request) {
  const data: Props = await request.json();
  if (!data.inputs)
    return NextResponse.json({ message: "Prompt is required!" });

  const client = await Client.connect("zheyangqin/VADER");
  console.log(data);
  const result = await client.predict("/gradio_main_fn", {
    prompt: data.inputs,
    lora_model: "huggingface-pickscore",
    lora_rank: 8,
  });

  console.log(result.data);

  return NextResponse.json({ message: true, data: "" });
}

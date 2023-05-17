import { NextResponse } from "next/server";
type Props = {
  prompt: string;
};
export async function POST(request: Request) {
  const data: Props = await request.json();
  if (!data.prompt)
    return NextResponse.json({ message: "Prompt is required!" });

  const res = await fetch(
    `${process.env.texttoimageAPI}/${process.env.texttoimageMODEL}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.huggingTOKEN}`,
      },
      body: JSON.stringify(data.prompt),
    }
  );

  const arrayBuffer = await res.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64Data = btoa(binary);
  const imageURL = `data:image/png;base64,${base64Data}`;

  return NextResponse.json({ message: true, data: imageURL });
}

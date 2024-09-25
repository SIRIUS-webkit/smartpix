import { NextResponse } from "next/server";
type Props = {
  inputs: string;
};

export async function POST(request: Request) {
  const data: Props = await request.json();

  if (!data.inputs) {
    return NextResponse.json(
      { message: "Prompt is required!" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${process.env.texttoimageAPI}/${process.env.texttoimageMODEL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.huggingTOKEN}`,
        },
        body: JSON.stringify(data.inputs),
      }
    );

    // Check if the model is still loading
    if (res.status === 503) {
      const errorData = await res.json();
      if (errorData.error && errorData.error.includes("loading")) {
        return NextResponse.json(
          {
            message: "Model is currently loading. Please try again later.",
            estimated_time: errorData.estimated_time,
          },
          { status: 503 }
        );
      }
    }

    // If the response is OK, convert the image to base64
    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binary = "";
      for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const base64Data = btoa(binary);
      const imageURL = `data:image/png;base64,${base64Data}`;

      return NextResponse.json(
        { message: true, data: imageURL },
        { status: 200 }
      );
    }

    // Handle other errors
    const errorText = await res.text();
    return NextResponse.json(
      { message: `Error: ${errorText}` },
      { status: res.status }
    );
  } catch (error) {
    // Catch and return any unexpected errors
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { message: `Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}

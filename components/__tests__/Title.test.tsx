import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "../Title";

describe("Title Component", () => {
  it("renders the title and subtitle correctly", () => {
    const title = "Welcome to the App";
    const subTitle = "This is the best app to manage your tasks.";

    render(<Title title={title} subTitle={subTitle} />);

    // Check if the title is rendered
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    // Check if the subtitle is rendered
    const subTitleElement = screen.getByText(subTitle);
    expect(subTitleElement).toBeInTheDocument();
  });

  it("applies the correct classes for styling", () => {
    const title = "Test Title";
    const subTitle = "Test Subtitle";

    const { container } = render(<Title title={title} subTitle={subTitle} />);

    // Check if the parent container has the correct classes
    const containerElement = container.firstChild;
    expect(containerElement).toHaveClass(
      "flex flex-col justify-center items-center mt-[2em] mb-[3em]"
    );

    // Check if the title element has the correct class
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toHaveClass("font-[700] text-center");

    // Check if the subtitle element has the correct class
    const subTitleElement = screen.getByText(subTitle);
    expect(subTitleElement).toHaveClass(
      "p2-regular-16 mdmin1050:max-w-[40%] max-w-full mx-auto text-center mt-2"
    );
  });
});

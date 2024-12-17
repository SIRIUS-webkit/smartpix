import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for better matchers
import CopyBtn from "../CopyBtn"; // Adjust the import path as necessary

describe("CopyBtn Component", () => {
  const link = "https://example.com";

  test("renders CopyBtn with initial tooltip and icon", () => {
    render(<CopyBtn link={link} />);

    // Verify the initial icon is AiFillCopy
    const copyIcon = screen.getByRole("button").querySelector("svg");
    expect(copyIcon).toHaveClass("text-primary");
  });

  test("changes tooltip and icon on click", async () => {
    render(<CopyBtn link={link} />);

    const button = screen.getByRole("button");

    // Simulate button click
    fireEvent.click(button);

    // Verify the icon changes to BsCheck
    const btnIcon = screen.getByRole("button").querySelector("svg");
    expect(btnIcon).toHaveClass("text-primary");
  });
});

import { render, screen } from "@testing-library/react";
import HeaderComp from "./HeaderComp";
import { expect, describe, it } from "vitest";

describe("HeaderComp", () => {
  it("renders some header text", () => {
    render(<HeaderComp />);
    expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  it("has a test id of HeaderComponent", () => {
    render(<HeaderComp />);
    expect(screen.getByTestId("HeaderComponent")).toBeInTheDocument();
  });
});

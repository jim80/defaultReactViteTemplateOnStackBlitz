import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  it("renders the loading component with a test id", () => {
    render(<Loading />);
    expect(screen.getByTestId("loadingComponent")).toBeInTheDocument();
  });
});

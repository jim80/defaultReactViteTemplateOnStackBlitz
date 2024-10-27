import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ErrorComp from "./ErrorComp";

describe("Error component", () => {
  it("renders error message with status code", () => {
    const error = { status: 404, message: "Not found" };
    const { getByText } = render(<ErrorComp error={error} />);
    expect(getByText("404", { exact: false })).toBeInTheDocument();
  });

  it("renders error component with test id", () => {
    const error = { status: 404, message: "Not found" };
    const { getByTestId } = render(<ErrorComp error={error} />);
    expect(getByTestId("ErrorComponent")).toBeInTheDocument();
  });
});

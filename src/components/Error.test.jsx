import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error component", () => {
  it("renders error message with status code", () => {
    const error = { status: 404, message: "Not found" };
    const { getByText } = render(<Error error={error} />);
    expect(getByText("ERROR : Error status : 404")).toBeInTheDocument();
  });

  it("renders error component with test id", () => {
    const error = { status: 404, message: "Not found" };
    const { getByTestId } = render(<Error error={error} />);
    expect(getByTestId("ErrorComponent")).toBeInTheDocument();
  });
});

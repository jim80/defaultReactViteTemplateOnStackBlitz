import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ImageViewer from "./ImageViewer";

describe("ImageViewer component", () => {
  it("renders an image with the provided srcUrl", () => {
    const srcUrl = "https://example.com/image.jpg";
    const { getByRole } = render(<ImageViewer srcUrl={srcUrl} />);
    const image = getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", srcUrl);
  });

  it("renders an image with a default srcUrl when not provided", () => {
    const { getByRole } = render(<ImageViewer />);
    const image = getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "");
  });
});

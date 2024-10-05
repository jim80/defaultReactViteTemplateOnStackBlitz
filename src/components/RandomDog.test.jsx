import { render, fireEvent, waitFor } from "@testing-library/react";
import RandomDog from "./RandomDog";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { beforeAll, afterEach, afterAll, expect, describe, it } from "vitest";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("RandomDog component", () => {
  it("renders a button and displays a loading message when clicked", async () => {
    const { getByText, getByRole } = render(<RandomDog />);
    const button = getByRole("button");
    expect(getByText("Get a random dog")).toBeInTheDocument();

    fireEvent.click(button);
    expect(getByText("LOADING ....")).toBeInTheDocument();
  });

  it("renders an error message when the API returns an error", async () => {
    server.use(
      http.get("https://dog.ceo/api/breeds/image/random", () => {
        return new HttpResponse("Not found", {
          status: 404,
          headers: {
            "Content-Type": "text/plain",
          },
        });
      })
    );

    const { getByText, getByRole } = render(<RandomDog />);
    const button = getByRole("button");
    fireEvent.click(button);

    await waitFor(() =>
      expect(getByText("ERROR : Error status : 404")).toBeInTheDocument()
    );
  });

  it("renders an image when the API returns a successful response", async () => {
    server.use(
      http.get("https://dog.ceo/api/breeds/image/random", () => {
        return HttpResponse.json({
          message: "https://example.com/image.jpg",
          status: "success",
        });
      })
    );

    const { getByRole } = render(<RandomDog />);
    const button = getByRole("button");
    fireEvent.click(button);

    await waitFor(() => expect(getByRole("img")).toBeInTheDocument());
  });
});

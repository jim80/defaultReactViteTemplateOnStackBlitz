// src/components/RandomDog.test.jsx

import { render, fireEvent, waitFor } from "@testing-library/react";
import { RandomDog } from "./RandomDog";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  beforeAll,
  afterEach,
  afterAll,
  expect,
  describe,
  it,
} from "@jest/globals";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("RandomDog component", () => {
  it("renders a button and displays a loading message when clicked", async () => {
    server.use(
      rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
        return res(ctx.delay("infinite"));
      })
    );

    const { getByText, getByRole } = render(<RandomDog />);
    const button = getByRole("button");
    expect(getByText("Get a random dog")).toBeInTheDocument();

    fireEvent.click(button);
    expect(getByText("LOADING ....")).toBeInTheDocument();
  });

  it("renders an error message when the API returns an error", async () => {
    server.use(
      rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { getByText, getByRole } = render(<RandomDog />);
    const button = getByRole("button");
    fireEvent.click(button);

    await waitFor(() =>
      expect(getByText("ERROR : Error status : 500")).toBeInTheDocument()
    );
  });

  it("renders an image when the API returns a successful response", async () => {
    server.use(
      rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
        return res(ctx.json({ message: "https://example.com/image.jpg" }));
      })
    );

    const { getByText, getByRole } = render(<RandomDog />);
    const button = getByRole("button");
    fireEvent.click(button);

    await waitFor(() => expect(getByRole("img")).toBeInTheDocument());
  });
});

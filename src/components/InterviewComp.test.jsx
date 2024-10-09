import { render, fireEvent, waitFor, getByText } from "@testing-library/react";
import InterviewComp from "./InterviewComp";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { beforeAll, afterEach, afterAll, expect, describe, it } from "vitest";
import { API_URL } from "../constants/constants";
import { TEST_API_DATA } from "../testdata/testdata";

const server = setupServer();

beforeAll(() =>
  server.listen({
    onUnhandledRequest(request, print) {
      // Do not print warnings on unhandled requests to the API URL
      if (request.url.includes(API_URL)) {
        return;
      }
      // Print the regular MSW unhandled request warning otherwise.
      print.warning();
    },
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("RandomDog component", () => {
  it("renders a button and displays a loading component when clicked", async () => {
    const { getByTestId } = render(<InterviewComp />);
    //const { getByText, getByRole, getByTestId } = render(<InterviewComp />);
    /* const button = getByRole("button");

    expect(getByText("Get a random dog")).toBeInTheDocument();

    fireEvent.click(button); */

    // any old loading component will do so, no need to test for anything specific
    expect(getByTestId("loadingComponent")).toBeInTheDocument();
  });

  it("renders an error message when the API returns an error", async () => {
    server.use(
      http.get(API_URL, () => {
        return new HttpResponse("Not found", {
          status: 404,
          statusText: "Not found",
          headers: {
            "Content-Type": "text/plain",
          },
        });
      })
    );

    const { getByText, getByTestId } = render(<InterviewComp />);

    await waitFor(() =>
      //just expect that we have some error Component
      expect(getByTestId("ErrorComponent")).toBeInTheDocument()
    );

    await waitFor(() =>
      //just expect that the error component DOES contain the error status code somewhere
      expect(getByText("404", { exact: false })).toBeInTheDocument()
    );
  });

  it("shows a message when the API returns an empty list", async () => {
    server.use(
      http.get(API_URL, () => {
        return HttpResponse.json([]);
      })
    );

    const { getByText } = render(<InterviewComp />);

    await waitFor(() =>
      expect(getByText("No drawings were returned by the server")).toBeVisible()
    );
  });

  it("renders a list of documents when the api returns data", async () => {
    server.use(
      http.get(API_URL, () => {
        return HttpResponse.json(TEST_API_DATA);
      })
    );

    const { getByText, getByTestId } = render(<InterviewComp />);

    //DrawingsListItem

    await waitFor(() =>
      expect(getByText("Browse Drawings")).toBeInTheDocument()
    );

    const numberOfItems = TEST_API_DATA.length;

    /* await waitFor(() =>
      // We expect 15 DrawingsListItem components because there are 15
      // documents in the TEST_API_DATA array.
      expect(getByTestId("DrawingsListItem")).toHaveLength(numberOfItems)
    ); */
  });

  /* it("renders an image when the API returns a successful response", async () => {
    server.use(
      http.get("https://dog.ceo/api/breeds/image/random", () => {
        return HttpResponse.json({
          message: "https://example.com/image.jpg",
          status: "success",
        });
      })
    );

    const { getByRole } = render(<InterviewComp />);
    const button = getByRole("button");
    fireEvent.click(button);

    await waitFor(() => expect(getByRole("img")).toBeInTheDocument());
  }); */

  /* it("renders an error when the API returns an unsuccessful status", async () => {
    server.use(
      http.get("https://dog.ceo/api/breeds/image/random", () => {
        return HttpResponse.json({
          message: "https://example.com/image.jpg",
          status: "failure",
        });
      })
    );

    const { getByText, getByRole } = render(<InterviewComp />);
    const button = getByRole("button");
    fireEvent.click(button);

    await waitFor(() =>
      expect(getByText("The Dogs API reported an error")).toBeInTheDocument()
    );
  }); */
});

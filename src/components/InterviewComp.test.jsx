import { render, fireEvent, waitFor } from "@testing-library/react";
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

describe("Interview Component", () => {
  it("renders a loading component when the data is loading", async () => {
    const { getByTestId } = render(<InterviewComp />);
    // any old loading component will do so, no need to test for anything specific content
    expect(getByTestId("loadingComponent")).toBeInTheDocument();
  });

  it("Should not render a drawing card when the list is being searched", async () => {
    // TODO unless the drawing is still in the searched list ?
    /* TODO */
    expect(true).toBe(false);
  });

  it("renders an error component when the API returns an error", async () => {
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

  it("renders a full list of drawings when the api returns data", async () => {
    server.use(
      http.get(API_URL, () => {
        return HttpResponse.json(TEST_API_DATA);
      })
    );

    const { getByText, getAllByTestId } = render(<InterviewComp />);

    await waitFor(() =>
      expect(getByText("Browse Drawings")).toBeInTheDocument()
    );

    // check it displays the whole list of drawings
    const numberOfDrawings = TEST_API_DATA.length;

    await waitFor(() =>
      expect(getAllByTestId("DrawingsListItem")).toHaveLength(numberOfDrawings)
    );

    // test the first drawing is rendered
    const firstDrawing = TEST_API_DATA[0];
    const firstDrawingListItem = getByText(firstDrawing.title, {
      exact: false,
    });
    expect(firstDrawingListItem).toBeInTheDocument();
    // and that it is visible
    expect(firstDrawingListItem).toBeVisible();

    // test the last drawing is rendered
    const lastDrawing = TEST_API_DATA[numberOfDrawings - 1];
    const lastDrawingList = getByText(lastDrawing.title, {
      exact: false,
    });
    expect(lastDrawingList).toBeInTheDocument();
  });

  it("renders a Card component for a drawing when that drawings list item is clicked", async () => {
    server.use(
      http.get(API_URL, () => {
        return HttpResponse.json(TEST_API_DATA);
      })
    );

    const { getByText, getAllByTestId } = render(<InterviewComp />);

    const numberOfItems = TEST_API_DATA.length;

    await waitFor(() =>
      expect(getAllByTestId("DrawingsListItem")).toHaveLength(15)
    );

    const lastDrawing = TEST_API_DATA[numberOfItems - 1];
    const lastDrawingListItem = getByText(lastDrawing.title, {
      exact: false,
    });

    fireEvent.click(lastDrawingListItem);

    // we'll test by the drawing data, not the Card component, testID etc
    /* const title = lastDrawing.title;
    const description = lastDrawing.description; */
    const project = lastDrawing.project;
    const category = lastDrawing.category;
    const uploader = lastDrawing.uploader;
    const uploaded_date = lastDrawing.uploaded_date;
    const file_url = lastDrawing.file_url;

    // check they are actually visible, or the card is no good!
    expect(getByText(project)).toBeVisible();
    expect(getByText(category)).toBeVisible();
    expect(getByText(uploader)).toBeVisible();
    expect(getByText(uploaded_date)).toBeVisible();
    expect(getByText(file_url)).toBeVisible();
  });

  it("renders the full list of drawings when the api returns data, and filters them when searched", async () => {
    server.use(
      http.get(API_URL, () => {
        return HttpResponse.json(TEST_API_DATA);
      })
    );

    const { getByText, getAllByTestId, getByRole } = render(<InterviewComp />);

    await waitFor(() =>
      expect(getByText("Browse Drawings")).toBeInTheDocument()
    );

    const numberOfItems = TEST_API_DATA.length;
    // check it displays the whole list of drawings
    await waitFor(() =>
      expect(getAllByTestId("DrawingsListItem")).toHaveLength(numberOfItems)
    );
    // check it filters the list of drawings
    const searchInput = getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "report" } });

    const expectedLengthAfterFilter = 3;

    await waitFor(() =>
      expect(getAllByTestId("DrawingsListItem")).toHaveLength(
        expectedLengthAfterFilter
      )
    );
  });
});
=
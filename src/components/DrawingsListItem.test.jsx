import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import DrawingsListItem from "./DrawingsListItem";

describe("DrawingsListItem component", () => {
  it("renders title and description", () => {
    const props = {
      id: "1",
      title: "Test Title",
      description: "Test Description",
      onListItemClicked: () => {},
    };
    render(<DrawingsListItem {...props} />);
    expect(
      screen.getByText("Test Title", { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Test Description", { exact: false })
    ).toBeInTheDocument();
  });

  it("calls onListItemClicked when clicked", () => {
    const props = {
      id: "1",
      title: "Test Title",
      description: "Test Description",
      onListItemClicked: vi.fn(),
    };
    render(<DrawingsListItem {...props} />);
    const listItem = screen.getByTestId("DrawingsListItem");
    fireEvent.click(listItem);
    expect(props.onListItemClicked).toHaveBeenCalledTimes(1);
    expect(props.onListItemClicked).toHaveBeenCalledWith("1");
  });
});

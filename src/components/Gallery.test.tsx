import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Gallery from "./Gallery";

describe("Gallery Component", () => {
  it("should render gallery with images", () => {
    render(<Gallery />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("should render 17 initial images", () => {
    render(<Gallery />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(17);
  });

  it("should mark first image as featured", () => {
    render(<Gallery />);
    const badge = screen.getByText("Featured");
    expect(badge).toBeInTheDocument();
  });

  it("should delete image when delete button is clicked", async () => {
    // Arrange: Setup state
    const user = await userEvent.setup();
    vi.stubGlobal("confirm", () => true);

    render(<Gallery />);
    const initialCount = screen.getAllByRole("img").length;

    // Act: User interactions
    const checkboxButtons = screen.getAllByTestId("button-checkbox");
    await user.click(checkboxButtons[0]);

    const deleteButton = screen.getByTestId("selection-bar-delete");
    await user.click(deleteButton);

    // Assert: Verify outcome
    const finalImages = screen.getAllByRole("img");
    expect(finalImages.length).toBe(initialCount - 1);
  });

  it("should delete multiple images when batch delete is clicked", async () => {
    // Arrange: Setup state
    const user = await userEvent.setup();
    vi.stubGlobal("confirm", () => true);

    render(<Gallery />);
    const initialCount = screen.getAllByRole("img").length;

    // Act: Select 3 images and delete
    const checkboxButtons = screen.getAllByTestId("button-checkbox");
    await user.click(checkboxButtons[0]);
    await user.click(checkboxButtons[1]);
    await user.click(checkboxButtons[2]);

    const deleteButton = screen.getByTestId("selection-bar-delete");
    await user.click(deleteButton);

    // Assert: Verify 3 images removed
    const finalImages = screen.getAllByRole("img");
    expect(finalImages.length).toBe(initialCount - 3);
  });

  it("should toggle image selection", async () => {
    // Arrange: Setup
    const user = await userEvent.setup();
    render(<Gallery />);

    const checkboxButtons = screen.getAllByTestId("button-checkbox");

    // Act & Assert: Select
    await user.click(checkboxButtons[0]);
    expect(screen.getByText("(1) selected")).toBeInTheDocument();

    // Act & Assert: Deselect
    await user.click(checkboxButtons[0]);
    expect(screen.queryByText("(1) selected")).not.toBeInTheDocument();
  });

  it("should clear selection when clear button clicked", async () => {
    // Arrange: Setup
    const user = await userEvent.setup();
    render(<Gallery />);

    const checkboxButtons = screen.getAllByTestId("button-checkbox");

    // Act: Select 2 images
    await user.click(checkboxButtons[0]);
    await user.click(checkboxButtons[1]);

    // Assert: Verify selection
    expect(screen.getByText("2 selected")).toBeInTheDocument();

    // Act: Clear selection
    const clearButton = screen.getByTestId("selection-bar-clear");
    await user.click(clearButton);

    // Assert: Verify cleared
    expect(screen.queryByText("2 selected")).not.toBeInTheDocument();
  });
});

// TODO: Add drag & drop tests
// dnd-kit testing seems to be complex for now
// Current: Manual testing (verified working)

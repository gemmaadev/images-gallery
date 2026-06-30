import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ImageItem from "./ImageItem";
import type { Image } from "@/types";

const mockImage: Image = {
  id: "1",
  src: "https://picsum.photos/800/600",
  alt: "Test image",
};

describe("ImageItem Component", () => {
  it("should render correctly with props", () => {
    // Arrange
    const onDelete = () => {};
    const onToggleSelect = () => {};

    // Act
    render(
      <ImageItem
        image={mockImage}
        isFeatured={false}
        isSelected={false}
        onDelete={onDelete}
        onToggleSelect={onToggleSelect}
      />,
    );

    // Assert
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
  });

  it("should apply featured class when isFeatured is true", () => {
    // Arrange
    const onDelete = () => {};
    const onToggleSelect = () => {};

    // Act
    render(
      <ImageItem
        image={mockImage}
        isFeatured={true}
        isSelected={false}
        onDelete={onDelete}
        onToggleSelect={onToggleSelect}
      />,
    );

    // Assert
    const badge = screen.getByText("Featured");
    expect(badge).toBeInTheDocument();
  });

  it("should apply selected class when isSelected is true", () => {
    // Arrange
    const onDelete = () => {};
    const onToggleSelect = () => {};

    // Act
    const { container } = render(
      <ImageItem
        image={mockImage}
        isFeatured={false}
        isSelected={true}
        onDelete={onDelete}
        onToggleSelect={onToggleSelect}
      />,
    );

    // Assert: Verify border classes applied when selected
    const checkSelected = container.querySelector("figure");
    expect(checkSelected).toHaveClass("border-4");
    expect(checkSelected).toHaveClass("border-blue-500");
  });

  it("should call onDelete when delete button is clicked", async () => {
    // Arrange: Use vi.fn() to mock and spy on callback
    const onDelete = vi.fn();
    const onToggleSelect = () => {};
    const user = await userEvent.setup();

    // Act
    render(
      <ImageItem
        image={mockImage}
        isFeatured={false}
        isSelected={false}
        onDelete={onDelete}
        onToggleSelect={onToggleSelect}
      />,
    );

    const deleteButton = screen.getByTestId("button-delete");
    await user.click(deleteButton);

    // Assert
    expect(onDelete).toHaveBeenCalledWith(mockImage.id);
  });

  it("should call onToggleSelect when checkbox button is clicked", async () => {
    // Arrange: Use vi.fn() to mock and spy on callback
    const onDelete = () => {};
    const onToggleSelect = vi.fn();
    const user = await userEvent.setup();

    // Act
    render(
      <ImageItem
        image={mockImage}
        isFeatured={false}
        isSelected={false}
        onDelete={onDelete}
        onToggleSelect={onToggleSelect}
      />,
    );

    const checkboxButton = screen.getByTestId("button-checkbox");
    await user.click(checkboxButton);

    // Assert
    expect(onToggleSelect).toHaveBeenCalledWith(mockImage.id);
  });
});

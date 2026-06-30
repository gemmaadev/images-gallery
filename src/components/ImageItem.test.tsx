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
  // Test: renderitza correctament amb les props
  it("should render correctly with props", () => {
    // Arrange: prepara
    const onDelete = () => {};
    const onToggleSelect = () => {};

    // Act: renderiza
    render(
      <ImageItem
        image={mockImage}
        isFeatured={false}
        isSelected={false}
        onDelete={onDelete}
        onToggleSelect={onToggleSelect}
      />,
    );

    // Assert: verifica
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
  });

  // Test: aplica classe featured quan isFeatured és true
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

    // Assert: verifica que aparece el badge
    const badge = screen.getByText("Featured");
    expect(badge).toBeInTheDocument();
  });

  // Test: aplica classe de selecció quan isSelected és true
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

    // Assert: verifica que l'icon check és de color blau
    const checkSelected = container.querySelector("figure");
    expect(checkSelected).toHaveClass("border-4");
    expect(checkSelected).toHaveClass("border-blue-500");
  });

  // Test: emet onDelete en fer click al botó d'eliminar
  it("should call onDelete when delete button is clicked", async () => {
    // Arrange
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

    // Assert
    const deleteButton = screen.getByTestId("button-delete");
    await user.click(deleteButton);
    expect(onDelete).toHaveBeenCalledWith(mockImage.id);
  });
});

// Test: emet onToggleSelect en fer click al botó de checkbox
it("should call onToggleSelect when checkbox button is clicked", async () => {
  // Arrange
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

  // Assert
  const checkboxButton = screen.getByTestId("button-checkbox");
  await user.click(checkboxButton);
  expect(onToggleSelect).toHaveBeenCalledWith(mockImage.id);
});

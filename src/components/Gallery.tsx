import { useState } from "react";
import { IMAGES } from "@/data/images";
import ImageItem from "./ImageItem";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import type { DragEndEvent } from "@dnd-kit/core";
import SelectionBar from "./SelectionBar";
import GalleryToolbar from "./GalleryToolbar";

export default function Gallery() {
  const [images, setImages] = useState(IMAGES);
  const [selectedIds, setSelectedIds] = useState(new Set());

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this image?")) {
      setImages(images.filter((image) => image.id !== id));

      const newSelected = new Set(selectedIds);
      newSelected.delete(id);
      setSelectedIds(newSelected);
    }
  };

  const items = images.map((image) => image.id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    const activeIndex = images.findIndex((image) => image.id === active.id);
    const overIndex = images.findIndex((image) => image.id === over.id);

    const newImages = [...images];

    const temporalVariable = newImages[activeIndex];
    newImages[activeIndex] = newImages[overIndex];
    newImages[overIndex] = temporalVariable;

    setImages(newImages);
  };

  const handleToggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);

    if (selectedIds.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }

    setSelectedIds(newSelected);
  };

  const handleBatchDelete = () => {
    if (selectedIds.size === 0) return;
    const confirmed = window.confirm(
      `Do you want to delete ${selectedIds.size} images?`,
    );
    if (!confirmed) return;

    setImages(images.filter((image) => !selectedIds.has(image.id)));

    setSelectedIds(new Set());
  };

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <GalleryToolbar
          imagesTotal={images.length}
          selectedCount={selectedIds.size}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={items}>
              {images.map((image, index) => (
                <ImageItem
                  key={image.id}
                  image={image}
                  isFeatured={index === 0}
                  onDelete={handleDelete}
                  isSelected={selectedIds.has(image.id)}
                  onToggleSelect={handleToggleSelect}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>

      {/* Sticky button - batch action (delete)  */}
      {selectedIds.size > 0 ? (
        <SelectionBar
          selectedCount={selectedIds.size}
          onDelete={handleBatchDelete}
          onClear={() => setSelectedIds(new Set())}
        />
      ) : null}
    </section>
  );
}

import type { Image } from "@/types";
import { Trash2, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSortable } from "@dnd-kit/sortable";

interface ImageItemProps {
  image: Image;
  isFeatured?: boolean;
  onDelete: (id: string) => void;
  onToggleSelect: (id: string) => void;
  isSelected?: boolean;
}

export default function ImageItem({
  image,
  isFeatured,
  onDelete,
  onToggleSelect,
  isSelected,
}: ImageItemProps) {
  const figureClassName = isFeatured
    ? "lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden shadow-lg relative"
    : "rounded-lg overflow-hidden h-85 relative";

  const featuredBadge = isFeatured ? (
    <>
      <div className="bg-brand-yellow  text-black px-3 py-1.5 rounded text-xs font-bold hidden md:flex">
        Featured
      </div>
      <Star
        size={30}
        fill="oklch(76.9% 0.188 70.08)"
        strokeWidth={0}
        className="flex md:hidden"
      />
    </>
  ) : null;

  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useSortable({ id: image.id });

  const handleControlsPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  return (
    <figure
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      className={`${figureClassName} group ${isDragging ? "cursor-grabbing opacity-50" : "cursor-grab"} ${isSelected ? "border-4 border-blue-500" : ""}`}
    >
      <img
        id={image.id}
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-all hover:scale-105 duration-300"
      />

      {/* Featured + Checkbox - Flex container, responsive */}
      <div
        onPointerDown={handleControlsPointerDown}
        className="absolute inset-0 flex items-start p-2 gap-2 pointer-events-none"
      >
        {/* Checkbox */}
        <Button
          data-testid="button-checkbox"
          size="icon"
          variant={isSelected ? "default" : "outline"}
          onClick={() => onToggleSelect(image.id)}
          className={`rounded-full pointer-events-auto  ${isSelected ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-transparent border-2 border-white"}`}
        >
          {isSelected ? <Check size={20} /> : null}
        </Button>

        {/* Featured badge */}
        <div>{featuredBadge}</div>
      </div>

      {/* Delete button */}
      <div
        onPointerDown={handleControlsPointerDown}
        className="absolute top-2 right-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100  transition-opacity"
      >
        <Button
          data-testid="button-delete"
          variant="outline"
          size="icon"
          onClick={() => onDelete(image.id)}
          className="hover:bg-red-400  hover:border-none"
        >
          <Trash2 size={20} />
        </Button>
      </div>
    </figure>
  );
}

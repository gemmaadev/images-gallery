import { useState } from "react";
import { IMAGES } from "@/data/images";
import ImageItem from "./ImageItem";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import type { DragEndEvent } from "@dnd-kit/core";
import SelectionBar from "./SelectionBar";
import GalleryToolbar from "./GalleryToolbar";

//Component pare
// Passa dades via props: A Gallery, defineix un array d'objectes amb id i src (utilitza imatges de picsum.photos).
// Destaca la primera imatge: A Gallery, condiciona que el primer element del array tingui una prop isFeatured={true}.

// Responsabilidades:
// Gestionar la lista de imágenes
// Renderizar múltiples ImageItem
// Determinar cuál es la imagen destacada

// Conceptos a aplicar:
// Uso de useState para estado
// Método .map() para renderizar listas
// Props drilling

export default function Gallery() {
  const [images, setImages] = useState(IMAGES);
  const [selectedIds, setSelectedIds] = useState(new Set());
  // 'images' = la llista actual
  // 'setImages' = funció per cambiar la llista
  // IMAGES = valor inicial

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this image?")) {
      setImages(images.filter((image) => image.id !== id));
    }
  };

  const items = images.map((image) => image.id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    // Encontrar posición del que arrastras
    const activeIndex = images.findIndex((image) => image.id === active.id);

    // Encontrar posición donde lo sueltas
    const overIndex = images.findIndex((image) => image.id === over.id);

    // Copiar el array (sin mutar el original)
    const newImages = [...images];

    // Guardar temporalmente
    const temporalVariable = newImages[activeIndex];

    // Mover over a la posición de active
    newImages[activeIndex] = newImages[overIndex];

    // Mover el temp (que era active) a la posición de over
    newImages[overIndex] = temporalVariable;

    // PASO 5: Guardar el nuevo array
    setImages(newImages);
    // Estado actualizado con las cartas reordenadas
  };

  const handleToggleSelect = (id: string) => {
    // 1. Crea nuevo Set (copia)
    const newSelected = new Set(selectedIds);

    // 2. ¿Está seleccionada?
    if (selectedIds.has(id)) {
      // Remover
      newSelected.delete(id);
    } else {
      // Agregar
      newSelected.add(id);
    }

    // 3. Actualizar estado
    setSelectedIds(newSelected);
  };

  const handleBatchDelete = () => {
    if (selectedIds.size === 0) return;
    // 1. Pedir confirmación
    const confirmed = window.confirm(
      `Do you want to delete ${selectedIds.size} images?`,
    );
    if (!confirmed) return;

    // 2. Eliminar múltiples
    setImages(images.filter((image) => !selectedIds.has(image.id)));

    // 3. Limpiar selecció
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

// Crear botó visible només quan selectedIds.size > 0
// Mostrar comptador: Eliminar {n} imatges
// Demanar confirmació abans d'eliminar
// Estilitzar el botó (color vermell, posició prominent)

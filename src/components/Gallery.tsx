import { useState } from "react";
import { IMAGES } from "@/data/images";
import ImageItem from "./ImageItem";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

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
  // 'images' = la llista actual
  // 'setImages' = funció per cambiar la llista
  // IMAGES = valor inicial

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this image?")) {
      setImages(images.filter((image) => image.id !== id));
    }
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {images.map((image, index) => (
            <ImageItem
              key={image.id}
              image={image}
              isFeatured={index === 0}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Image } from "@/types";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

//Component fill
// Passa dades via props: Passa cada objecte com a prop a ImageItem. Crea un type per tipar les props que estàs passant.
// Destaca la primera imatge: A ImageItem, usa isFeatured per renderitzar condicionalment una classe de CSS que dupliqui la mida de l'element destacat.
interface ImageItemProps {
  image: Image;
  isFeatured?: boolean;
  onDelete: (id: string) => void;
}
//props són els paràmetres que rep el component

export default function ImageItem({
  image,
  isFeatured,
  onDelete,
}: ImageItemProps) {
  const figureClassName = isFeatured
    ? "lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden shadow-lg relative"
    : "rounded-lg overflow-hidden h-85 relative";

  const featuredBadge = isFeatured ? (
    <div className="absolute top-2 left-2 bg-brand-yellow text-black px-3 py-1 rounded text-xs font-bold">
      Featured
    </div>
  ) : null;

  const handleDeleteClick = (event) => {
    event.stopPropagation(); // Evita que el click suba al <figure>
    onDelete(image.id); // Llama al callback del padre con el id
  };

  return (
    <figure className={`${figureClassName} group`}>
      <img
        id={image.id}
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-all hover:scale-105 duration-300"
      />
      {featuredBadge}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
        onClick={handleDeleteClick}
      >
        <Trash2 size={20} />
      </Button>
    </figure>
  );
}

// Definir i tipar les props: image: Image, isFeatured?: boolean
// Renderitzar la imatge amb src i alt correctes
// Aplicar className condicionalment segons isFeatured

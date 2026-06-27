import type { Image } from "@/types";

//Component fill
// Passa dades via props: Passa cada objecte com a prop a ImageItem. Crea un type per tipar les props que estàs passant.
// Destaca la primera imatge: A ImageItem, usa isFeatured per renderitzar condicionalment una classe de CSS que dupliqui la mida de l'element destacat.
interface ImageItemProps {
  image: Image;
  isFeatured?: boolean;
}
//props són els paràmetres que rep el component

export default function ImageItem({ image, isFeatured }: ImageItemProps) {
  const figureClassName = isFeatured
    ? "lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden shadow-lg relative"
    : "rounded-lg overflow-hidden h-85 relative";

  const featuredBadge = isFeatured ? (
    <div className="absolute top-2 left-2 bg-brand-yellow text-black px-3 py-1 rounded text-xs font-bold">
      Featured
    </div>
  ) : null;

  return (
    <figure className={figureClassName}>
      <img
        id={image.id}
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-all hover:scale-105 duration-300"
      />
      {featuredBadge}
    </figure>
  );
}

// Definir i tipar les props: image: Image, isFeatured?: boolean
// Renderitzar la imatge amb src i alt correctes
// Aplicar className condicionalment segons isFeatured

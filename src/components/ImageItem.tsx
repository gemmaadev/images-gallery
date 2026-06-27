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
  return (
    <figure className={isFeatured ? "featured-image" : "default-image"}>
      <img id={image.id} src={image.src} alt={image.alt} />
    </figure>
  );
}

// Definir i tipar les props: image: Image, isFeatured?: boolean
// Renderitzar la imatge amb src i alt correctes
// Aplicar className condicionalment segons isFeatured

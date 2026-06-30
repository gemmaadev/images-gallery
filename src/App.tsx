import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import GalleryHeader from "@/components/GalleryHeader";

export default function App() {
  return (
    <main className="container mx-auto">
      <PageHeader />
      <GalleryHeader />
      <Gallery /> {/* Gallery contains GalleryToolbar + SelectionBar */}
    </main>
  );
}

import { Grid2x2 } from "lucide-react";
import { Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryToolbarProps {
  selectedCount: number;
  imagesTotal: number;
}

export default function GalleryToolbar({
  selectedCount,
  imagesTotal,
}: GalleryToolbarProps) {
  return (
    <div className="flex flex-row py-6 justify-between border-t items-center">
      <div className="flex gap-2">
        <span>({imagesTotal}) images</span>
        <span>•</span>
        <span className="text-blue-600 font-bold">
          ({selectedCount}) selected
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <select className="hidden md:flex border border-gray-300 rounded-lg p-2">
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="az">Name: A to Z</option>
          <option value="za">Name: Z to A</option>
        </select>

        <Button
          variant="ghost"
          className="hover:bg-blue-100 hover:text-blue-500 h-10 w-10"
        >
          <Grid2x2 size={30} strokeWidth={1} />
        </Button>

        <Button
          variant="ghost"
          className="hover:bg-blue-100 hover:text-blue-500 h-10 w-10"
        >
          <Grid3x3 strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}

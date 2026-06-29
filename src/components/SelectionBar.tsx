import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface SelectionBarProps {
  selectedCount: number;
  onDelete: () => void;
  onClear: () => void;
}

export default function SelectionBar({
  selectedCount,
  onDelete,
  onClear,
}: SelectionBarProps) {
  return (
    <div className="flex flex-row sticky bottom-3 bg-gray-50 justify-between px-5 py-9 shadow-lg">
      <div className="flex-col">
        <span className="text-xl font-bold">{selectedCount} selected</span>
        <p>You can delete or clear your selection</p>
      </div>
      <div className="flex gap-6">
        <Button onClick={onClear} variant={"outline"} className="px-3 py-5">
          Clear selection
        </Button>
        <Button
          onClick={onDelete}
          className={`bg-red-600 text-white hover:bg-red-700 px-3 py-5`}
        >
          <Trash2 size={20} />
          Delete ({selectedCount})
        </Button>
      </div>
    </div>
  );
}

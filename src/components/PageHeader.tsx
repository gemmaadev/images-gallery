import { Moon, User, Menu, Search } from "lucide-react";
import logo from "@/assets/images-gallery-icon.png";

export default function PageHeader() {
  return (
    <>
      <div className="hidden md:flex bg-gray-900 text-white px-4 py-3 text-center justify-center gap-4">
        <span>Drag & drop to reorder your images</span>
        <button className="underline hover:opacity-80">Learn more</button>
      </div>

      <header className="flex gap-3 border-b px-8 py-5">
        {/* Logo + Navigation items */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center">
            <div className="flex gap-2">
              <img src={logo} className="w-8 h-8" alt="Logo" />
              <span className="text-xl font-bold">ImageGallery</span>
            </div>

            <nav className="hidden md:flex gap-6 items-center px-9">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Gallery
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Albums
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Favorites
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Collections
              </a>
            </nav>
          </div>

          {/* Search bar + Icons */}
          <div className="flex gap-4 items-center">
            <div className="relative hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search images..."
                className="border rounded-lg px-3 py-2 pl-9 text-sm w-40"
              />
              <Search size={18} className="absolute left-3 cursor-pointer" />
            </div>

            <Moon size={20} className="hidden lg:flex cursor-pointer" />
            <User size={20} className="hidden lg:flex cursor-pointer" />
            <Menu size={20} className="flex cursor-pointer md:hidden" />
          </div>
        </div>
      </header>
    </>
  );
}

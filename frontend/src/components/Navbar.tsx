import {
  FiSearch,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <h1 className="text-[24px] font-bold text-slate-900 whitespace-nowrap">
          WorkShelf
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-slate-700 lg:hidden"
        >
        {menuOpen ? (
          <FiX size={24} />
        ) : (
          <FiMenu size={24} />
        )}
        </button>

        {/* Search */}
        <div className="mx-8 hidden max-w-md flex-1 lg:block">
          <div className="relative">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search books, office supplies..."
              className="h-11 w-full rounded-full border border-gray-200 bg-gray-50 pl-12 pr-4 text-[15px] placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Categories */}
        <nav className="hidden lg:flex items-center gap-10">
          <a
            href="#"
            className="text-[16px] font-medium text-slate-900 hover:text-blue-600 transition"
          >
            Books
          </a>

          <a
            href="#"
            className="text-[16px] font-medium text-slate-900 hover:text-blue-600 transition"
          >
            Office
          </a>

          <a
            href="#"
            className="text-[16px] font-medium text-slate-900 hover:text-blue-600 transition"
          >
            Business
          </a>
        </nav>

        {/* Right Menu */}
        <div className="ml-12 hidden lg:flex items-center gap-8">
          <a
            href="#"
            className="text-[16px] font-medium text-slate-900 hover:text-blue-600 transition"
          >
            Wishlist
          </a>

          <a
            href="#"
            className="text-[16px] font-medium text-slate-900 hover:text-blue-600 transition"
          >
            Cart
          </a>

          <a
            href="#"
            className="text-[16px] font-medium text-slate-900 hover:text-blue-600 transition"
          >
            Profile
          </a>
        </div>
      </div>

        {/* Mobile Menu */}
        {
          menuOpen && (
            <div className="border-t bg-white lg:hidden">
              <nav className="flex flex-col p-4">
                <a className="py-3">Books</a>
                <a className="py-3">Office</a>
                <a className="py-3">Business</a>

                <hr className="my-3" />

                <a className="py-3">Wishlist</a>
                <a className="py-3">Cart</a>
                <a className="py-3">Profile</a>
              </nav>
            </div>
          )}
          {/* Mobile Search */}
          <div className="border-t border-gray-200 px-4 py-3 lg:hidden">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search books, office supplies..."
                className="h-11 w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>
    </header>
  );
};

export default Navbar;
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <h1 className="text-[24px] font-bold text-slate-900 whitespace-nowrap">
          WorkShelf
        </h1>

        {/* Search */}
        <div className="mx-8 flex-1 max-w-md">
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
    </header>
  );
};

export default Navbar;
import { FiFilter } from 'react-icons/fi';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { useState } from "react";
import FilterDrawer from "./FilterDrawer";

const ProductFilters = () => {
  const [drawerOpen, setDrawerOpen] =
    useState(false);

  return (
    <div className="mt-6 space-y-4">

      {/* Filter Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-sm font-medium shadow-sm transition hover:bg-gray-50">
          <FiFilter />
          Filter
        </button>

        <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-sm font-medium shadow-sm transition hover:bg-gray-50">
          <HiOutlineAdjustmentsHorizontal />
          Sort
        </button>
      </div>

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Book Category */}
      <select
        className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm shadow-sm outline-none focus:border-blue-500"
      >
        <option>All Books</option>
        <option>Programming</option>
        <option>Business</option>
        <option>Self Development</option>
        <option>Science</option>
        <option>History</option>
        <option>Biography</option>
        <option>Fiction</option>
        <option>Non-Fiction</option>
      </select>

    </div>
  );
};

export default ProductFilters;
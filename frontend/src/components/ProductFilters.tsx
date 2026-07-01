import { FiFilter } from 'react-icons/fi';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

const ProductFilters = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-sm font-medium shadow-sm transition hover:bg-gray-50">
        <FiFilter />
        Filter
      </button>

      <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-sm font-medium shadow-sm transition hover:bg-gray-50">
        <HiOutlineAdjustmentsHorizontal />
        Sort
      </button>
    </div>
  );
};

export default ProductFilters;
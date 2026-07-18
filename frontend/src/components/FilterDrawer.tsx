import { FiX } from "react-icons/fi";

type Props = {
  open: boolean;
  onClose: () => void;
};

const FilterDrawer = ({
  open,
  onClose,
}: Props) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-80 bg-white shadow-xl transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-3xl font-bold">
            Filters
          </h2>

          <button onClick={onClose}>
            <FiX size={28} />
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto p-6">

          {/* Price */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Price Range
            </h3>

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Min"
                className="w-full rounded-xl border p-3"
              />

              <input
                type="number"
                placeholder="Max"
                className="w-full rounded-xl border p-3"
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Categories
            </h3>

            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Books
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Office Supplies
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Furniture
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Electronics
              </label>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Rating
            </h3>

            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                4★ & Above
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                3★ & Above
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                2★ & Above
              </label>
            </div>
          </div>

          {/* Stock */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Availability
            </h3>

            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                In Stock
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Out of Stock
              </label>
            </div>
          </div>

          <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Apply Filters
          </button>

          <button className="w-full text-blue-600">
            Reset Filters
          </button>

        </div>
      </aside>
    </>
  );
};

export default FilterDrawer;
import { Link } from 'react-router-dom';

const ProductToolbar = () => {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        placeholder="Search products..."
        className="h-11 rounded-lg border border-gray-200 px-4 outline-none focus:border-blue-600"
      />

      <Link
        to="/admin/products/new"
        className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        + Add Product
      </Link>

    </div>
  );
};

export default ProductToolbar;
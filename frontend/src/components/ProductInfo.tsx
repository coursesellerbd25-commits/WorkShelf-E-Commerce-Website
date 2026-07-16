import QuantitySelector from './QuantitySelector';
import type { Product } from '../types/product';

type Props = {
  product: Product;
};

const ProductInfo = ({ product }: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900">
        {product.name}
      </h1>

      <p className="mt-1 text-slate-500">
        by James Clear
      </p>

      <p className="mt-3 text-lg text-yellow-500">
        ★★★★★
        <span className="ml-2 text-base text-slate-500">
          4.8 (1,240 Reviews)
        </span>
      </p>

      <h2 className="mt-5 text-5xl font-bold text-slate-900">
        ${product.price}
      </h2>

      {product.bulkAvailable && (
        <div className="mt-6 rounded-xl bg-green-100 p-4 text-center font-medium text-green-700">
          ✓ Available for Bulk Orders
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-semibold">
          Description
        </h3>

        <p className="mt-3 leading-7 text-slate-500">
          A practical guide to building good habits,
          breaking bad habits, and improving every day.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 font-semibold">
          Quantity
        </h3>

        <QuantitySelector />
      </div>

      <div className="mt-8 space-y-4">
        <button className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
          Add To Cart
        </button>

        <button className="w-full rounded-xl border border-blue-600 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
          Buy Now
        </button>
      </div>

      {/* Bulk Order Form */}
      {product.bulkAvailable && (
        <section className="mt-10 rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-bold">
            Bulk Order Request
          </h2>

          <div className="mt-6 space-y-4">

          <input
            type="number"
            placeholder="Quantity"
            className="w-full rounded-xl border p-3"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full rounded-xl border p-3"
          />

          <input
            type="email"
            placeholder="Business Email"
            className="w-full rounded-xl border p-3"
          />

          <textarea
            rows={4}
            placeholder="Additional Notes"
            className="w-full rounded-xl border p-3"
          />

          <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Request Quote
          </button>

        </div>
      </section>
    )}
    </div>
  );
};

export default ProductInfo;
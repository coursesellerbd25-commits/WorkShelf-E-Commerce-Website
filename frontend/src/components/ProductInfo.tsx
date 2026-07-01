import QuantitySelector from './QuantitySelector';

const ProductInfo = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900">
        Atomic Habits
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
        $24.99
      </h2>

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
    </div>
  );
};

export default ProductInfo;
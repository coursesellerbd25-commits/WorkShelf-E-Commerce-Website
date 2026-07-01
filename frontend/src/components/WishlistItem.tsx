import { FaStar } from 'react-icons/fa';

const WishlistItem = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        {/* Image */}
        <div className="flex h-32 w-full items-center justify-center rounded-xl bg-slate-200 text-slate-500 md:h-32 md:w-32">
          Image
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-slate-900">
            Atomic Habits
          </h2>

          <div className="mt-2 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className="text-sm text-amber-500"
              />
            ))}

            <span className="ml-2 text-slate-500">
              4.8
            </span>
          </div>

          <p className="mt-4 text-3xl font-bold text-slate-900">
            $24.99
          </p>
        </div>

        {/* Right Side Actions */}
        <div className="flex flex-col gap-3 md:w-52">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Add To Cart
          </button>

          <button className="rounded-lg border border-red-500 px-6 py-3 font-semibold text-red-500 transition hover:bg-red-50">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
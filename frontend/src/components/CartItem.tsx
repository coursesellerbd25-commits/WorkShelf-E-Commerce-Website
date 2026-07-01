import { FaStar } from 'react-icons/fa';

const CartItem = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="flex gap-5">

        {/* Image */}
        <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-slate-200 text-slate-500">
          Image
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">

          <h2 className="text-2xl font-semibold text-slate-900">
            Atomic Habits
          </h2>

          <div className="mt-2 flex items-center gap-1">

            {[1,2,3,4,5].map((star)=>(
              <FaStar
                key={star}
                className="text-sm text-amber-500"
              />
            ))}

            <span className="ml-2 text-slate-500">
              4.8
            </span>

          </div>

          <p className="mt-3 text-4xl font-bold">
            $24.99
          </p>

          {/* Bottom */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

            {/* Quantity */}
            <div className="flex items-center gap-2">

              <button className="h-10 w-10 rounded-lg border">
                -
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                1
              </div>

              <button className="h-10 w-10 rounded-lg border">
                +
              </button>

            </div>

            <button className="font-semibold text-red-500 hover:text-red-600">
              Remove
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartItem;
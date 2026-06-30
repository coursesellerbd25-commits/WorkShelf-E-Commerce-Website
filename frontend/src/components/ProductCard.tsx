import { FaStar } from 'react-icons/fa';

type ProductCardProps = {
  name: string;
  price: number;
  rating: number;
  image?: string;
};

const ProductCard = ({
  name,
  price,
  rating,
  image,
}: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-52 items-center justify-center bg-slate-200">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-slate-500">Product Image</span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="truncate text-xl font-semibold text-slate-900">
          {name}
        </h3>

      <div className="mt-3 flex items-center gap-1 text-sm text-amber-500">
        <FaStar className="text-xs" />
          <span>{rating}</span>
      </div>

        <p className="mt-4 text-3xl font-bold text-slate-900">
          ${price.toFixed(2)}
        </p>

        <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
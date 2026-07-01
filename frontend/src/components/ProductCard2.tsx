import { FaStar } from 'react-icons/fa';

type Product = {
  product: {
    name: string;
    price: number;
    rating: number;
  };
};

const ProductCard = ({ product }: Product) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="flex h-44 items-center justify-center bg-slate-200 text-sm text-slate-500">
        Product Image
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-500" />

          <span className="text-orange-500">
            {product.rating}
          </span>
        </div>

        <p className="mt-4 text-3xl font-bold text-slate-900">
          ${product.price}
        </p>

        <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
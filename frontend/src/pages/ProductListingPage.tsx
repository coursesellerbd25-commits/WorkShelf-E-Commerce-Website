import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard2 from '../components/ProductCard2';
import ProductFilters from '../components/ProductFilters';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import ErrorMessage from '../components/ErrorMessage';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/productService';

export type Product = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
  description: string;
  images?: string[];
};

const ProductListingPage = () => {
  const {
  data: products = [],
  isLoading,
  error,
} = useQuery<Product[]>({
  queryKey: ['products'],
  queryFn: getProducts,
});

  if (error) {
    return (
      <ErrorMessage
        message={(error as Error).message}
      />
    );
  }
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Search */}
          <input
            type="text"
            placeholder="Search books..."
            className="h-11 w-full rounded-full border border-gray-200 bg-white px-5 text-sm outline-none focus:border-blue-500"
          />

          {/* Title */}
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              Books
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              {products.length} Products
            </p>
          </div>

          {/* Filters */}
          <ProductFilters />

          {/* Product Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
              : products.map((product) => (
                <ProductCard2
                  key={product._id}
                  product={product}
                />
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductListingPage;
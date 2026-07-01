import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard2 from '../components/ProductCard2';
import ProductFilters from '../components/ProductFilters';

const products = [
  {
    id: 1,
    name: 'Atomic Habits',
    price: 49.99,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Clean Code',
    price: 39.99,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Office Chair',
    price: 129.99,
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Wireless Keyboard',
    price: 59.99,
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Business Planner',
    price: 19.99,
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Desk Lamp',
    price: 34.99,
    rating: 4.8,
  },
];

const ProductListingPage = () => {
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
              245 Products
            </p>
          </div>

          {/* Filters */}
          <ProductFilters />

          {/* Product Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard2
                key={product.id}
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
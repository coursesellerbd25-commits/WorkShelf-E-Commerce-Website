import ProductCard from './ProductCard';

const products = [
  {
    name: 'Atomic Habits',
    price: 49.99,
    rating: 4.8,
  },
  {
    name: 'Clean Code',
    price: 39.99,
    rating: 4.8,
  },
  {
    name: 'Office Chair',
    price: 129.99,
    rating: 4.8,
  },
  {
    name: 'Wireless Keyboard',
    price: 59.99,
    rating: 4.8,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900">
          Featured Products
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
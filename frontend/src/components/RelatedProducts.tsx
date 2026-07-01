import ProductCard from './ProductCard';

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
];

const RelatedProducts = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">
            Related Products
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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

export default RelatedProducts;
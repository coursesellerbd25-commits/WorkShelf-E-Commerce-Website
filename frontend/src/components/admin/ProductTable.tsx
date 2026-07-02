import ProductRow from './ProductRow';

const products = [
  {
    id: 1,
    name: 'Atomic Habits',
    category: 'Books',
    price: 49.99,
    stock: 18,
  },
  {
    id: 2,
    name: 'Clean Code',
    category: 'Books',
    price: 39.99,
    stock: 11,
  },
  {
    id: 3,
    name: 'Office Chair',
    category: 'Furniture',
    price: 129.99,
    stock: 6,
  },
];

const ProductTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-4 py-4 text-left">
              Product
            </th>

            <th className="px-4 py-4 text-left">
              Category
            </th>

            <th className="px-4 py-4 text-left">
              Price
            </th>

            <th className="px-4 py-4 text-left">
              Stock
            </th>

            <th className="px-4 py-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ProductTable;
import { Link } from 'react-router-dom';

const QuickActions = () => {
  return (
    <section className="mt-14">

      <h2 className="mb-6 text-4xl font-bold">
        Quick Actions
      </h2>

      <div className="space-y-4">

        <Link
          to="/admin/products"
          className="block rounded-xl bg-blue-600 py-4 text-center text-xl font-semibold text-white hover:bg-blue-700"
        >
          Add Product
        </Link>

        <Link
          to="/admin/orders"
          className="block rounded-xl bg-blue-600 py-4 text-center text-xl font-semibold text-white hover:bg-blue-700"
        >
          Manage Orders
        </Link>

        <Link
          to="/admin/analytics"
          className="block rounded-xl bg-blue-600 py-4 text-center text-xl font-semibold text-white hover:bg-blue-700"
        >
          View Analytics
        </Link>

      </div>

    </section>
  );
};

export default QuickActions;
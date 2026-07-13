import { Link } from 'react-router-dom';

const QuickActions = () => {
  return (
    <section className="mt-10 lg:mt-14">
      <h2 className="mb-5 text-2xl font-bold sm:text-3xl lg:mb-6 lg:text-4xl">
        Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/admin/products"
          className="rounded-xl bg-blue-600 py-4 text-center text-base font-semibold text-white transition hover:bg-blue-700 sm:text-lg lg:text-xl"
        >
          Add Product
        </Link>

        <Link
          to="/admin/orders"
          className="rounded-xl bg-blue-600 py-4 text-center text-base font-semibold text-white transition hover:bg-blue-700 sm:text-lg lg:text-xl"
        >
          Manage Orders
        </Link>

        <Link
          to="/admin/analytics"
          className="rounded-xl bg-blue-600 py-4 text-center text-base font-semibold text-white transition hover:bg-blue-700 sm:col-span-2 lg:col-span-1 sm:text-lg lg:text-xl"
        >
          View Analytics
        </Link>
      </div>
    </section>
  );
};

export default QuickActions;
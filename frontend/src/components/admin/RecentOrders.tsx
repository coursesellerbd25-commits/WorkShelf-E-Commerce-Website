const orders = [
  {
    id: '#ORD-1248',
    customer: 'John Doe',
    total: '$149.99',
    status: 'Completed',
    color: 'bg-green-100 text-green-600',
  },
  {
    id: '#ORD-1249',
    customer: 'Sarah Johnson',
    total: '$89.50',
    status: 'Processing',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: '#ORD-1250',
    customer: 'Michael Chen',
    total: '$249.99',
    status: 'Pending',
    color: 'bg-yellow-100 text-yellow-700',
  },
];

const RecentOrders = () => {
  return (
    <section className="mt-10 lg:mt-14">
      <h2 className="mb-5 text-2xl font-bold sm:text-3xl lg:mb-6 lg:text-4xl">
        Recent Orders
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col gap-4 rounded-2xl border bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm text-slate-400">
                {order.id}
              </p>

              <h3 className="mt-1 text-lg font-semibold sm:text-xl lg:text-2xl">
                {order.customer}
              </h3>

              <p className="mt-1 text-lg font-bold lg:text-xl">
                {order.total}
              </p>
            </div>

            <span
              className={`self-start rounded-full px-4 py-2 text-sm font-semibold sm:self-center ${order.color}`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentOrders;
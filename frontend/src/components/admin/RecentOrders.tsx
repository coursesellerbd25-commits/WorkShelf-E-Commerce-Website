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
    <section className="mt-14">

      <h2 className="mb-6 text-4xl font-bold">
        Recent Orders
      </h2>

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-2xl border bg-white p-5"
          >
            <div>
              <p className="text-slate-400">
                {order.id}
              </p>

              <h3 className="text-2xl font-semibold">
                {order.customer}
              </h3>

              <p className="mt-1 text-xl font-bold">
                {order.total}
              </p>
            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${order.color}`}
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
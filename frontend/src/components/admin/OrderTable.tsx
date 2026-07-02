import OrderRow from './OrderRow';

const orders = [
  {
    id: 1001,
    customer: 'John Doe',
    total: 129.99,
    status: 'Pending',
    date: '02 Jul 2026',
  },
  {
    id: 1002,
    customer: 'Sarah Smith',
    total: 249.5,
    status: 'Processing',
    date: '01 Jul 2026',
  },
  {
    id: 1003,
    customer: 'Alex Brown',
    total: 69.99,
    status: 'Delivered',
    date: '30 Jun 2026',
  },
];

const OrderTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="px-4 py-4 text-left">Order</th>

            <th className="px-4 py-4 text-left">
              Customer
            </th>

            <th className="px-4 py-4 text-left">
              Total
            </th>

            <th className="px-4 py-4 text-left">
              Status
            </th>

            <th className="px-4 py-4 text-left">
              Date
            </th>

            <th className="px-4 py-4 text-left">
              Actions
            </th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default OrderTable;
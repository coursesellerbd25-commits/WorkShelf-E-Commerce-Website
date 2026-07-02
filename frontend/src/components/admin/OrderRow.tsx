type Props = {
  order: {
    id: number;
    customer: string;
    total: number;
    status: string;
    date: string;
  };
};

const statusColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-700';

    case 'Processing':
      return 'bg-yellow-100 text-yellow-700';

    case 'Pending':
      return 'bg-blue-100 text-blue-700';

    case 'Cancelled':
      return 'bg-red-100 text-red-700';

    default:
      return 'bg-slate-100 text-slate-700';
  }
};

const OrderRow = ({ order }: Props) => {
  return (
    <tr className="border-b">

      <td className="px-4 py-4">#{order.id}</td>

      <td className="px-4 py-4">
        {order.customer}
      </td>

      <td className="px-4 py-4">
        ${order.total.toFixed(2)}
      </td>

      <td className="px-4 py-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${statusColor(order.status)}`}
        >
          {order.status}
        </span>
      </td>

      <td className="px-4 py-4">
        {order.date}
      </td>

      <td className="space-x-3 px-4 py-4">

        <button className="rounded bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-200">
          View
        </button>

        <button className="rounded bg-slate-100 px-4 py-2 hover:bg-slate-200">
          Update
        </button>

      </td>

    </tr>
  );
};

export default OrderRow;
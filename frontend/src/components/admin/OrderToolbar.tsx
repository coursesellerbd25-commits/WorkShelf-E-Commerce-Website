const OrderToolbar = () => {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        placeholder="Search orders..."
        className="h-11 rounded-lg border border-gray-200 px-4 outline-none focus:border-blue-600"
      />

      <select
        className="h-11 rounded-lg border border-gray-200 px-4 outline-none focus:border-blue-600"
      >
        <option>All Orders</option>
        <option>Pending</option>
        <option>Processing</option>
        <option>Shipped</option>
        <option>Delivered</option>
        <option>Cancelled</option>
      </select>

    </div>
  );
};

export default OrderToolbar;
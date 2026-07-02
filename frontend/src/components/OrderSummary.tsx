import { Link } from 'react-router-dom';

const OrderSummary = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">

      <h2 className="text-3xl font-bold">
        Order Summary
      </h2>

      <div className="mt-8 space-y-5 text-lg">

        <div className="flex justify-between">
          <span className="text-slate-500">Subtotal</span>
          <span>$89.97</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Shipping</span>
          <span>$5.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Tax</span>
          <span>$2.50</span>
        </div>

      </div>

      <div className="my-8 border-t"></div>

      <div className="flex justify-between text-3xl font-bold">
        <span>Total</span>
        <span>$97.47</span>
      </div>

      <Link
        to="/checkout"
        className="mt-8 block w-full rounded-xl bg-blue-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Proceed to Checkout
      </Link>

      <Link
        to="/products"
        className="mt-6 block text-center text-lg font-medium text-blue-600 hover:underline"
      >
        Continue Shopping
      </Link>

    </div>
  );
};

export default OrderSummary;
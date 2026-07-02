import { Link } from 'react-router-dom';

const OrderSummary2 = () => {
  return (
    <section className="mt-12">

      <h2 className="mb-6 text-3xl font-semibold">
        Order Summary
      </h2>

      <div className="rounded-2xl bg-white p-6 shadow-sm">

        <div className="space-y-4">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$89.97</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>$2.50</span>
          </div>

          <hr />

          <div className="flex justify-between text-3xl font-bold">
            <span>Total</span>
            <span>$97.47</span>
          </div>

        </div>

        <Link
            to="/order-success"
            className="mt-8 block w-full rounded-xl bg-blue-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700"
        >
            Place Order
        </Link>

        <p className="mt-6 text-center text-sm text-slate-500">
          🔒 Secure checkout powered by WorkShelf
        </p>

      </div>

    </section>
  );
};

export default OrderSummary2;
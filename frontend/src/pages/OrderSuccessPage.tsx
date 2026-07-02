import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderSuccessPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">

          <FiCheckCircle
            className="text-green-500"
            size={90}
          />

          <h1 className="mt-8 text-4xl font-bold text-slate-900">
            Order Placed Successfully!
          </h1>

          <p className="mt-5 max-w-lg text-lg text-slate-500">
            Thank you for shopping with WorkShelf.
            Your order has been received and is now being processed.
          </p>

          <div className="mt-10 rounded-xl bg-white p-8 shadow-sm">

            <p className="text-slate-500">
              Order Number
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              #WS102548
            </h2>

            <p className="mt-6 text-slate-500">
              Estimated Delivery
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              3–5 Business Days
            </h3>

          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/orders"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              View My Orders
            </Link>

            <Link
              to="/products"
              className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Continue Shopping
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default OrderSuccessPage;
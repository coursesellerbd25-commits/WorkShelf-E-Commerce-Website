import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

const CartPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          {/* Heading */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Shopping Cart
            </h1>

            <p className="mt-2 text-slate-500">
              3 Items
            </p>
          </div>

          {/* Layout */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">

            {/* Left */}
            <div className="space-y-6">

              <CartItem />
              <CartItem />
              <CartItem />

            </div>

            {/* Right */}
            <OrderSummary />

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default CartPage;
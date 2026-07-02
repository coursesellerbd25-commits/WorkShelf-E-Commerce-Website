import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import CheckoutForm from '../components/CheckoutForm';
import DeliveryMethod from '../components/DeliveryMethod';
import PaymentMethod from '../components/PaymentMethod';
import OrderSummary2 from '../components/OrderSummary2';

const CheckoutPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-8">

          <h1 className="mb-8 text-4xl font-bold text-slate-900">
            Checkout
          </h1>

          <CheckoutForm />

          <DeliveryMethod />

          <PaymentMethod />

          <OrderSummary2 />

        </div>
      </main>

      <Footer />
    </>
  );
};

export default CheckoutPage;
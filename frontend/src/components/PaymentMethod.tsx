import { useState } from 'react';

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
  return (
    <section className="mt-12">

        <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Payment Method
        </h2>

    <div className="mt-6 space-y-4">

    {/* Credit Card */}
    <button
        onClick={() => setPaymentMethod('card')}
        className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 text-left"
    >
        <span className="text-lg font-medium">
            Credit Card
        </span>

        <div
        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
            paymentMethod === 'card'
            ? 'border-blue-600'
            : 'border-gray-300'
        }`}
        >
        {paymentMethod === 'card' && (
            <div className="h-3 w-3 rounded-full bg-blue-600" />
        )}
        </div>
    </button>

    {/* PayPal */}
    <button
        onClick={() => setPaymentMethod('paypal')}
        className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 text-left"
    >
        <span className="text-lg font-medium">
            PayPal
        </span>

        <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
            paymentMethod === 'paypal'
            ? 'border-blue-600'
            : 'border-gray-300'
        }`}
        >
        {paymentMethod === 'paypal' && (
            <div className="h-3 w-3 rounded-full bg-blue-600" />
        )}
        </div>
    </button>

    {/* Cash on Delivery */}
    <button
        onClick={() => setPaymentMethod('cod')}
        className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 text-left"
    >
        <span className="text-lg font-medium">
            Cash on Delivery
        </span>

        <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
            paymentMethod === 'cod'
            ? 'border-blue-600'
            : 'border-gray-300'
            }`}
        >
            {paymentMethod === 'cod' && (
            <div className="h-3 w-3 rounded-full bg-blue-600" />
            )}
        </div>
    </button>

    </div>

    </section>
  );
};

export default PaymentMethod;
import { useState } from 'react';

const DeliveryMethod = () => {
    const [deliveryMethod, setDeliveryMethod] = useState('standard');
  return (
    <section className="mt-12">

        {/* Delivery Method */}

        <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Delivery Method
        </h2>

        <div className="mt-6 space-y-4">

        {/* Standard */}
        <button
            onClick={() => setDeliveryMethod('standard')}
            className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition
        ${
            deliveryMethod === 'standard'
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-blue-300'
        }`}
        >
        <div>
            <h3 className="text-lg font-semibold">
                Standard Delivery
            </h3>

            <p className="text-slate-500">
                3–5 Business Days
            </p>
        </div>

        <div className="flex items-center gap-5">
            <span className="text-xl font-bold">
                $5.00
            </span>

        <div
            className={`h-5 w-5 rounded-full border-2 ${
            deliveryMethod === 'standard'
                ? 'border-blue-600 bg-blue-600'
                : 'border-gray-300'
            }`}
        />
        </div>
        </button>

        {/* Express */}
        <button
            onClick={() => setDeliveryMethod('express')}
            className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition
        ${
            deliveryMethod === 'express'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-blue-300'
        }`}
        >
        <div>
            <h3 className="text-lg font-semibold">
                Express Delivery
            </h3>

            <p className="text-slate-500">
                1–2 Business Days
            </p>
        </div>

        <div className="flex items-center gap-5">
            <span className="text-xl font-bold">
                $15.00
            </span>

        <div
            className={`h-5 w-5 rounded-full border-2 ${
            deliveryMethod === 'express'
                ? 'border-blue-600 bg-blue-600'
                : 'border-gray-300'
            }`}
        />
        </div>
    </button>

    </div>

    </section>
  );
};

export default DeliveryMethod;
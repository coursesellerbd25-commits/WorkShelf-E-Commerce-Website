const CheckoutForm = () => {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-semibold">
        Shipping Information
      </h2>

      <div className="space-y-4">

        <input
          placeholder="Full Name"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none focus:border-blue-600"
        />

        <input
          placeholder="Email Address"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none focus:border-blue-600"
        />

        <input
          placeholder="Phone Number"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none focus:border-blue-600"
        />

        <input
          placeholder="Street Address"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none focus:border-blue-600"
        />

        <input
          placeholder="City"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none focus:border-blue-600"
        />

        <input
          placeholder="Postal Code"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none focus:border-blue-600"
        />

      </div>

    </section>
  );
};

export default CheckoutForm;
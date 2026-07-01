type Props = {
  onClose: () => void;
};

const AddressForm = ({ onClose }: Props) => {
  return (
    <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold">
        Add Address
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <input
          placeholder="Full Name"
          className="rounded-lg border p-3"
        />

        <input
          placeholder="Phone Number"
          className="rounded-lg border p-3"
        />

        <input
          placeholder="City"
          className="rounded-lg border p-3"
        />

        <input
          placeholder="Postal Code"
          className="rounded-lg border p-3"
        />

        <input
          placeholder="Country"
          className="rounded-lg border p-3"
        />

        <select className="rounded-lg border p-3">
          <option>Home</option>
          <option>Office</option>
        </select>

      </div>

      <textarea
        rows={4}
        placeholder="Street Address"
        className="mt-5 w-full rounded-lg border p-3"
      />

      <div className="mt-6 flex gap-4">

        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
          Save Address
        </button>

        <button
          onClick={onClose}
          className="rounded-lg border px-6 py-3"
        >
          Cancel
        </button>

      </div>

    </div>
  );
};

export default AddressForm;
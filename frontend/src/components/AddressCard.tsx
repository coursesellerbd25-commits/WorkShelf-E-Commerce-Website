const AddressCard = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">
              Home
            </h2>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Default
            </span>
          </div>

          <p className="mt-5 text-slate-700">
            Sultana Jahan Tahmina
          </p>

          <p className="mt-1 text-slate-500">
            House 12, Road 5
          </p>

          <p className="text-slate-500">
            Chattogram, Bangladesh
          </p>

          <p className="text-slate-500">
            4203
          </p>

          <p className="mt-3 text-slate-500">
            +880 1XXXXXXXXX
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <button className="rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100">
            Edit
          </button>

          <button className="rounded-lg border border-red-500 px-5 py-2 text-red-500 hover:bg-red-50">
            Delete
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Set Default
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddressCard;
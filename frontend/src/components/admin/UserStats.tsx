const UserStats = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-slate-500">Users</p>
        <h2 className="mt-3 text-3xl font-bold">
          5412
        </h2>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-slate-500">Admins</p>
        <h2 className="mt-3 text-3xl font-bold">
          8
        </h2>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-slate-500">New Today</p>
        <h2 className="mt-3 text-3xl font-bold">
          24
        </h2>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-slate-500">Active</p>
        <h2 className="mt-3 text-3xl font-bold">
          4987
        </h2>
      </div>
    </div>
  );
};

export default UserStats;
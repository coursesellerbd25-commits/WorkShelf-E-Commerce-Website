type Props = {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
    joined: string;
  };
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {user.name}
          </h2>

          <p className="mt-1 text-slate-500">
            {user.email}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Joined {user.joined}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            {user.role}
          </span>

          <button className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 hover:bg-blue-50">
            Edit
          </button>

          <button className="rounded-lg border border-red-500 px-5 py-2 text-red-500 hover:bg-red-50">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
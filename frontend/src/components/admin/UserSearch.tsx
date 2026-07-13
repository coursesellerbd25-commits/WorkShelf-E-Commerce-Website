const UserSearch = () => {
  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full rounded-xl border px-5 py-3 outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default UserSearch;
import UserSearch from '../components/admin/UserSearch';
import UserStats from '../components/admin/UserStats';
import UserCard from '../components/admin/UserCard';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Customer',
    joined: '12 Jun 2026',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Admin',
    joined: '05 Jul 2026',
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@example.com',
    role: 'Customer',
    joined: '20 Jul 2026',
  },
];

const AdminUsersPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        User Management
      </h1>

      <p className="mt-2 text-slate-500">
        Manage registered users.
      </p>

      <UserStats />

      <UserSearch />

      <div className="mt-8 space-y-5">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </>
  );
};

export default AdminUsersPage;
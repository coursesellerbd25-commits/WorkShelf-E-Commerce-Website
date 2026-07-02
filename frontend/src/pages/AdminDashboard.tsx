import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <AdminSidebar />

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          Welcome back, Admin.
        </p>
      </main>
    </div>
  );
};

export default AdminDashboard;
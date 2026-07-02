import AdminSidebar from '../components/AdminSidebar';
import AnalyticsCards from '../components/admin/AnalyticsCards';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <AdminSidebar />

      <main className="flex-1 bg-slate-100 p-6 md:p-8">
        <h1 className="mb-8 text-4xl font-bold">
          Dashboard
        </h1>

        <AnalyticsCards />

        <p className="mt-4 text-lg text-slate-500">
          Welcome back, Admin.
        </p>
      </main>
    </div>
  );
};

export default AdminDashboard;
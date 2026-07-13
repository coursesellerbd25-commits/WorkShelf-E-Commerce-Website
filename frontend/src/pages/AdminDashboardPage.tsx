import AnalyticsCards from '../components/admin/AnalyticsCards';
import RecentOrders from '../components/admin/RecentOrders';
import QuickActions from '../components/admin/QuickActions';

const AdminDashboardPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Welcome Back, Admin
      </h1>

      <p className="mt-2 text-base text-slate-500 sm:text-lg lg:text-xl">
        Here's what's happening today.
      </p>

      <AnalyticsCards />

      <RecentOrders />

      <QuickActions />
    </>
  );
};

export default AdminDashboardPage;
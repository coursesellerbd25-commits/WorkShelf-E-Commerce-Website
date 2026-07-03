import AnalyticsCards from '../components/admin/AnalyticsCards';
import RecentOrders from '../components/admin/RecentOrders';
import QuickActions from '../components/admin/QuickActions';

const AdminDashboardPage = () => {
   return (
    <>
        <h1 className="text-5xl font-bold">
          Welcome Back, Admin
        </h1>

        <p className="mt-2 text-xl text-slate-500">
          Here's what's happening today.
        </p>

        <AnalyticsCards />
        <RecentOrders />
        <QuickActions />
    </>
  );
};

export default AdminDashboardPage;
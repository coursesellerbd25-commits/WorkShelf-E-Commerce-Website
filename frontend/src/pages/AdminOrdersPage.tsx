import AdminSidebar from '../components/AdminSidebar';
import OrderToolbar from '../components/admin/OrderToolbar';
import OrderTable from '../components/admin/OrderTable';

const AdminOrdersPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      <AdminSidebar />

      <main className="flex-1 p-8">

        <h1 className="mb-8 text-4xl font-bold">
          Orders
        </h1>

        <OrderToolbar />

        <OrderTable />

      </main>

    </div>
  );
};

export default AdminOrdersPage;
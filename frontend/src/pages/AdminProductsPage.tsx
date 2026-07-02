import AdminSidebar from '../components/AdminSidebar';
import ProductToolbar from '../components/admin/ProductToolbar';
import ProductTable from '../components/admin/ProductTable';

const AdminProductsPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      <AdminSidebar />

      <main className="flex-1 p-8">

        <h1 className="mb-8 text-4xl font-bold">
          Products
        </h1>

        <ProductToolbar />

        <ProductTable />

      </main>

    </div>
  );
};

export default AdminProductsPage;
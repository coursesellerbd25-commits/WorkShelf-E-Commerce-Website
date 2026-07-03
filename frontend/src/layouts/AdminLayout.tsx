import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import AdminTopbar from '../components/admin/AdminTopbar';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/admin/AdminFooter';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <AdminTopbar
        toggleSidebar={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-10 bg-black/40 lg:hidden"
        />
      )}

      <div className="flex">
        <AdminSidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />

      <div className="flex min-h-screen flex-1 flex-col lg:ml-72">
        <main className="flex-1 bg-slate-50 px-6 py-10">
          <Outlet />
        </main>

        <AdminFooter />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
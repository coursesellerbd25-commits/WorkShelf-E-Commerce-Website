import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside
        className="
            min-h-screen
            w-full
            bg-white
            px-8
            py-10
            shadow-md
            lg:w-72
        "
    >
      {/* Logo */}
      <h1 className="mb-12 text-center text-4xl font-bold text-slate-900">
        WorkShelf Admin
      </h1>

      <nav className="space-y-3">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `block rounded-xl px-6 py-4 text-2xl font-medium transition ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-slate-900 hover:bg-slate-100'
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className="block rounded-xl px-6 py-4 text-2xl text-slate-900 hover:bg-slate-100"
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className="block rounded-xl px-6 py-4 text-2xl text-slate-900 hover:bg-slate-100"
        >
          Orders
        </NavLink>

        <NavLink
          to="/admin/customers"
          className="block rounded-xl px-6 py-4 text-2xl text-slate-900 hover:bg-slate-100"
        >
          Customers
        </NavLink>

        <NavLink
          to="/admin/analytics"
          className="block rounded-xl px-6 py-4 text-2xl text-slate-900 hover:bg-slate-100"
        >
          Analytics
        </NavLink>

        <NavLink
          to="/admin/settings"
          className="block rounded-xl px-6 py-4 text-2xl text-slate-900 hover:bg-slate-100"
        >
          Settings
        </NavLink>

        <button
          className="mt-8 px-6 py-4 text-2xl text-red-500 transition hover:text-red-600"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
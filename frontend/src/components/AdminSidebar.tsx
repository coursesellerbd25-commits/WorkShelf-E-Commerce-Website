import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-6 py-4 text-2xl font-medium transition ${
      isActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-slate-900 hover:bg-slate-100'
    }`;
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
          className={navLinkClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={navLinkClass}
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={navLinkClass}
        >
          Orders
        </NavLink>

        <NavLink
          to="/admin/customers"
          className={navLinkClass}
        >
          Customers
        </NavLink>

        <NavLink
          to="/admin/analytics"
          className={navLinkClass}
        >
          Analytics
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={navLinkClass}
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
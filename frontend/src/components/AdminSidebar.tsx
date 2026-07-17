import { NavLink } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const AdminSidebar = ({
  isOpen,
  closeSidebar,
}: Props) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-6 py-4 text-2xl font-medium transition ${
      isActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-slate-900 hover:bg-slate-100'
    }`;
  return (
    <aside
      className={`
        fixed
        top-20
        left-0
        z-20
        flex
        h-[calc(100vh-80px)]
        w-72
        flex-col
        bg-white
        px-8
        py-10
        shadow-lg
        transition-transform
        duration-300

      ${
        isOpen
          ? 'translate-x-0'
          : '-translate-x-full'
      }
        lg:translate-x-0
      `}
    >

      {/* Logo */}
      <h1 className="mb-12 text-center text-4xl font-bold text-slate-900">
        WorkShelf Admin
      </h1>

      <nav className="flex-1 space-y-3 overflow-y-auto">
        <NavLink
          to="/admin"
          end
          onClick={closeSidebar}
          className={navLinkClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          onClick={closeSidebar}
          className={navLinkClass}
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          onClick={closeSidebar}
          className={navLinkClass}
        >
          Orders
        </NavLink>

        <NavLink
          to="/admin/customers"
          onClick={closeSidebar}
          className={navLinkClass}
        >
          Customers
        </NavLink>

        <NavLink
          to="/admin/analytics"
          onClick={closeSidebar}
          className={navLinkClass}
        >
          Analytics
        </NavLink>

        <NavLink
          to="/admin/reports"
          onClick={closeSidebar}
          className={navLinkClass}
        >
          Reports
        </NavLink>

        <NavLink
          to="/admin/settings"
          onClick={closeSidebar}
          className={navLinkClass}
        >
          Settings
        </NavLink>
      </nav>

        <button
          className="mt-6 w-full rounded-xl border border-red-200 py-4 text-xl font-medium text-red-500 transition hover:bg-red-600"
        >
          Logout
        </button>
    </aside>
  );
};

export default AdminSidebar;
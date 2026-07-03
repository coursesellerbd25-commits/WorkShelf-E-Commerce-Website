import { FiMenu } from 'react-icons/fi';

type Props = {
  toggleSidebar: () => void;
};

const AdminTopbar = ({ toggleSidebar }: Props) => {
  return (
    <header className="sticky top-0 z-40 border-b bg-white shadow-sm">
       <div
        className="
          mx-auto
          grid h-16
          grid-cols-3
          items-center
          px-4
          lg:flex lg:h-20 lg:justify-between lg:px-8
        "
      >

      <button
        onClick={toggleSidebar}
        className="rounded-lg p-2 text-2xl text-slate-700 transition hover:bg-slate-100 lg:hidden"
      >
        <FiMenu />
      </button>

      <h1 className="text-center text-2xl text-lg font-bold text-slate-900 sm:text-2xl lg:flex-none lg:text-3xl">
        Admin Dashboard
      </h1>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white sm:h-12 sm:w-12 sm:text-lg">
        A
      </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
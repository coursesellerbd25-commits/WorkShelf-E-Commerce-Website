import {
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
} from 'react-icons/fi';

const stats = [
  {
    title: 'Total Orders',
    value: '245',
    icon: <FiShoppingBag size={28} />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Total Users',
    value: '98',
    icon: <FiUsers size={28} />,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Revenue',
    value: '$12,450',
    icon: <FiDollarSign size={28} />,
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const AnalyticsCards = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                {stat.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {stat.value}
              </h2>
            </div>

            <div
              className={`rounded-xl p-4 ${stat.color}`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
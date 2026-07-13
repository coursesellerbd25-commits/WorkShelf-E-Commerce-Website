import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Total Orders',
    value: '1,248',
    link: '/admin/orders',
  },
  {
    title: 'Revenue',
    value: '$24,580',
    link: '/admin/analytics',
  },
  {
    title: 'Products',
    value: '320',
    link: '/admin/products',
  },
  {
    title: 'Users',
    value: '5,412',
    link: '/admin/customers',
  },
];

const AnalyticsCards = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5">
      {cards.map((card) => (
        <Link
          key={card.title}
          to={card.link}
          className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-6"
        >
          <p className="text-sm text-slate-500 sm:text-base lg:text-lg">
            {card.title}
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:mt-8 lg:text-5xl">
            {card.value}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default AnalyticsCards;
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
    <div className="mt-10 grid grid-cols-2 gap-5">

      {cards.map((card) => (
        <Link
          key={card.title}
          to={card.link}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-lg text-slate-500">
            {card.title}
          </p>

          <h2 className="mt-8 text-5xl font-bold">
            {card.value}
          </h2>

        </Link>
      ))}

    </div>
  );
};

export default AnalyticsCards;
import { Link } from 'react-router-dom';

const categories = [
  'Books',
  'Office',
  'Furniture',
  'Electronics',
  'Business',
  'Stationery',
];

const CategorySection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-slate-900">
          Shop By Category
        </h2>

        {/* Category Cards */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:max-w-3xl">
          {categories.map((category) => {
            const cardClasses = `
              flex
              h-36
              items-center
              justify-center
              rounded-2xl
              border
              border-gray-100
              bg-white
              text-xl
              font-semibold
              text-slate-900
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-600
              hover:text-white
              hover:shadow-xl
            `;

            if (category === 'Books') {
              return (
                <Link
                  key={category}
                  to="/products"
                  className={cardClasses}
                >
                  {category}
                </Link>
              );
            }

            return (
              <button
                key={category}
                type="button"
                className={cardClasses}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
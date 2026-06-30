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
          {categories.map((category) => (
            <button
              key={category}
              className="
                h-36
                rounded-2xl
                bg-white
                shadow-sm
                border border-gray-100

                text-xl
                font-semibold
                text-slate-900

                transition-all
                duration-300

                hover:bg-blue-600
                hover:text-white
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
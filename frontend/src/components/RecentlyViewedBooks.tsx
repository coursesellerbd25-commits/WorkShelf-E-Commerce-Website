import { useEffect, useState } from 'react';
import { getRecentlyViewed } from '../utils/recentlyViewed';
import ProductCard2 from './ProductCard2';

const RecentlyViewedBooks = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    setBooks(getRecentlyViewed());
  }, []);

  if (books.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-bold">
        Recently Viewed
      </h2>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {books.map((book) => (
          <ProductCard2
            key={book._id}
            product={book}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewedBooks;
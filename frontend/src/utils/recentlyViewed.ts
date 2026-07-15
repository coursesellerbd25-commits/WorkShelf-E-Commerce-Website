const STORAGE_KEY = 'recentlyViewedBooks';

export const saveRecentlyViewed = (book: any) => {
  const existing = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || '[]'
  );

  const filtered = existing.filter(
    (item: any) => item._id !== book._id
  );

  filtered.unshift(book);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(filtered.slice(0, 8))
  );
};

export const getRecentlyViewed = () => {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEY) || '[]'
  );
};
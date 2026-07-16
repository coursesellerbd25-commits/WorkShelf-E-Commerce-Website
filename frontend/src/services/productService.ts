export const getProducts = async () => {
  const response = await fetch(
    'http://localhost:5000/api/v1/products'
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || 'Failed to fetch products.'
    );
  }

  return data.products;
};

export const getProductById = async (id: string) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/products/${id}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || 'Failed to fetch product.'
    );
  }

  return data.product;
};
export const getRecommendations = async (
  id: string
) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${id}/recommendations`
  );

  if (!res.ok) {
    throw new Error('Failed to load recommendations');
  }

  const data = await res.json();

  return data.recommendations;
};
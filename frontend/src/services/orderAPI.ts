import axios from 'axios';

export const placeOrder = async (orderData: unknown) => {
  const response = await axios.post(
    'http://localhost:5000/api/orders',
    orderData,
  );

  return response.data;
};
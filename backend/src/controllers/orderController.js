import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Order placed successfully.',
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to place order.',
      error,
    });
  }
};
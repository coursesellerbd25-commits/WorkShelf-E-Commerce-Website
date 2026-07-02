export const getDashboardStats = async (req, res) => {
  try {
    res.status(200).json({
      orders: 245,
      users: 98,
      revenue: 12450,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to load dashboard stats',
    });
  }
};
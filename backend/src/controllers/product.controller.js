import Product from '../models/product.model.js';

export const createProduct = async (req, res) => {
  try {
    // 1. Receive request data
    const { name, price,  rating, stock, images, category, description } = req.body;

    // 2. Validate required fields
    if (!name || !price || !category || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields.',
      });
    }

    // 3. Create product
    const product = await Product.create({
      name,
      price,
      rating,
      stock,
      images,
      category,
      description,
    });

    // 4. Return success response
    res.status(201).json({
      success: true,
      message: 'Product created successfully.',
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    // Get page and limit from query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Calculate how many products to skip
    const skip = (page - 1) * limit;

    const {
      search,
      category,
      minPrice,
      maxPrice,
      rating,
      inStock,
    } = req.query;

    const filter = {};

    // Search
    if (search) {
      filter.$text = {
        $search: search,
      };
    }

    // Category
    if (category) {
      filter.category = category;
    }

    // Price
    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    // Rating
    if (rating) {
      filter.rating = {
        $gte: Number(rating),
      };
    }

    // Stock
    if (inStock === 'true') {
      filter.stock = {
        $gt: 0,
      };
    }

    // Total products
    const totalProducts = await Product.countDocuments(filter);

    // Products
    const products = await Product.find(filter)
      .skip(skip)
      .limit(limit);

    // Return response
    res.status(200).json({
      success: true,
      page,
      limit,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    // Get product ID from URL
    const { id } = req.params;

    // Find product by ID
    const product = await Product.findById(id);

    // Check if product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      });
    }

    // Return product
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    // Get product ID from URL
    const { id } = req.params;

    // Update product
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    // Check if product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      });
    }

    // Return updated product
    res.status(200).json({
      success: true,
      message: 'Product updated successfully.',
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    // Get product ID from URL
    const { id } = req.params;

    // Find product
    const product = await Product.findById(id);

    // Check if product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      });
    }

    // Delete product
    await product.deleteOne();

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = [
      'Books',
      'Office',
      'Stationery',
      'Electronics',
    ];

    res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
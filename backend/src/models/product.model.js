import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: 150,
    },

    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    stock: {
      type: Number,
      required: [true, 'Stock is required'],
      min: 0,
      default: 0,
    },

    images: [
      {
        type: String,
        required: true,
      },
    ],

    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },

    bulkAvailable: {
      type: Boolean,
      default: false,
    },

    bookCategory: {
      type: String,
      default: '',
    },

    author: {
      type: String,
      default: '',
    },

    publisher: {
      type: String,
      default: '',
    },

    pages: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({
  name: 'text',
  description: 'text',
  category: 'text',
});

const Product = mongoose.model('Product', productSchema);

export default Product;
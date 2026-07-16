import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

// Generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// @desc    Register a new user
// @route   POST /api/v1/auth/register
export const register = async (req, res) => {
  try {
    // 1. Receive request data
    const { name, email, password, companyName, businessType, companyWebsite, companyPhone, } = req.body;

    // 2. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and password.',
      });
    }

    // 3. Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists.',
      });
    }

    // 4. Create user
    // Password will be hashed automatically by the User model
    const user = await User.create({
      name,
      email,
      password,
      companyName,
      businessType,
      companyWebsite,
      companyPhone,
    });

    // 5. Generate JWT
    const token = generateToken(user._id);

    // 6. Return success response
    res.status(201).json({
      success: true,
      message: 'User registered successfully.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Login user
// @route   POST /api/v1/auth/login
export const login = async (req, res) => {
  try {
    // 1. Get request data
    const { email, password } = req.body;

    // 2. Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password.',
      });
    }

    // 3. Find user and include password
    const user = await User.findOne({ email }).select('+password');

    // 4. Check if user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    // 5. Compare passwords
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    // 6. Generate JWT
    const token = generateToken(user._id);

    // 7. Return success response
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
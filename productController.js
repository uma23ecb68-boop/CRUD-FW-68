const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  try {
    const { productName, description, price, category } = req.body;
    const product = await Product.create({ productName, description, price, category });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    // 1️⃣ Get page and limit from query params
    const page = parseInt(req.query.page) || 1;       // default page 1
    const limit = parseInt(req.query.limit) || 10;    // default 10 items per page
    const skip = (page - 1) * limit;

    // 2️⃣ Count total products
    const total = await Product.countDocuments();

    // 3️⃣ Get products with pagination
    const products = await Product.find().skip(skip).limit(limit);

    // 4️⃣ Send response with pagination info
    res.status(200).json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalProducts: total,
      products
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { productName, description, price, category } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { productName, description, price, category },
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

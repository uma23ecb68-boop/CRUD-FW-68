const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, default: 'General' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);

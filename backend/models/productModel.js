const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  description: String,
  prix: String,
  image: String,
  category: String,
},
{
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

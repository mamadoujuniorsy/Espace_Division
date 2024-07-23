const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  description: String,
  prix: String,
  image: String,
  category: String,
  stock: {type:Number, default: 50},
  note: {type:Number, default: 3}
},
{
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

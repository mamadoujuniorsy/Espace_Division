const Product = require('../../models/productModel.js');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createProduct = async (req, res) => {
  try {
    const { id, name, description, prix, image, category } = req.body;
    const product = new Product({
      id,
      name,
      description,
      prix,
      image,
      category
    });
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json({ message: "Suppression réussie" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Product = require('../../models/productModel.js');

// Configuration de multer pour l'upload d'images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');  // Répertoire où les images seront stockées
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Middleware multer pour l'upload d'une seule image
const upload = multer({ storage })

// Contrôleur pour créer un produit avec upload d'image
const createProduct = async (req, res) => {
  try {
    const { id, description, prix, category, stock, note } = req.body;
    const { path: imagePath } = req.file;  // Chemin de l'image uploadée
    const product = new Product({
      id,
      description,
      prix,
      image: imagePath,  // Stocke le chemin de l'image
      category,
      stock,
      note
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find({
      $or: [
        { description: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } }
      ]
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  upload ,
};

const express = require('express');
const router = express.Router();
const userSignUpController = require('../controllers/user/userSignup');
const userSignInController = require('../controllers/user/userSignin');
const userDetailsController = require('../controllers/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controllers/user/userLogout');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product/productController');

// Routes Utilisateurs
router.get("/user-details", authToken, userDetailsController);
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/logout", userLogout);

// Routes Produits
router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;

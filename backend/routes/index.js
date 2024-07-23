const express = require('express');
const router = express.Router();
const userSignUpController = require('../controllers/user/userSignup');
const userSignInController = require('../controllers/user/userSignin');
const userDetailsController = require('../controllers/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controllers/user/userLogout');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct, searchProducts, upload } = require('../controllers/product/productController');
const { 
  createCommande, 
  getUserCommandes, 
  getCommandeById, 
  updateCommandeStatus, 
  deleteCommande
} = require('../controllers/commande/commandeController');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/user/userController');

// Routes Utilisateurs
router.get("/user-details", authToken, userDetailsController);
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/logout", userLogout);

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
// Routes Produits
router.get('/products', getProducts);
router.get('/products/search', searchProducts);
router.get('/products/:id', getProduct);
router.post('/products', upload.single('image'), createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// Routes pour les commandes
router.post('/commandes', createCommande);
router.get('/commandes/user/:userId', getUserCommandes);
router.get('/commandes/:id', getCommandeById);
router.put('/commandes/:id', updateCommandeStatus);
router.delete('/commandes/:id', deleteCommande);
//router.get('/commandes', fetchAllCommandes);


module.exports = router;

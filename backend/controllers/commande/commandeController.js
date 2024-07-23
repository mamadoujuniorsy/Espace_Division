const Commande = require('../../models/commandeModel');

// Créer une nouvelle commande
const createCommande = async (req, res) => {
  const { user, products, totalAmount } = req.body;
  try {
    const newCommande = new Commande({ user, products, totalAmount });
    const savedCommande = await newCommande.save();
    res.status(201).json(savedCommande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir toutes les commandes d'un utilisateur
const getUserCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find({ user: req.params.userId }).populate('products.product');
    res.status(200).json(commandes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir une commande par ID
const getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id).populate('products.product');
    if (!commande) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.status(200).json(commande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mettre à jour le statut d'une commande
const updateCommandeStatus = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!commande) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.status(200).json(commande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une commande
const deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.status(200).json({ message: 'Commande supprimée avec succès' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Exporter les fonctions du contrôleur
module.exports = {
  createCommande,
  getUserCommandes,
  getCommandeById,
  updateCommandeStatus,
  deleteCommande
};

const mongoose = require('mongoose');
const { Schema } = mongoose;

const methodesPaiement = {
  values: ['sur place', 'paydunya'],
  message: 'Le type de méthode de paiement est invalide'
}

const commandeSchema = new Schema(
  {
    articles: [
      {
        produit: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantite: { type: Number, required: true }
      }
    ],
    montantTotal: { type: Number, required: true },
    nombreArticles: { type: Number },
    utilisateur: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    methodePaiement: { type: String, required: true, enum: methodesPaiement },
    statutPaiement: { type: String, default: 'en attente' },
    statut: { type: String, default: 'en attente' },
    adresseSelectionnee: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

const virtual = commandeSchema.virtual('id');
virtual.get(function () {
  return this._id;
});

commandeSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;

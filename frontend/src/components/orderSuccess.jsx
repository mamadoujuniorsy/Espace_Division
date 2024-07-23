import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 border rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-green-400">Commande réussie !</h1>
      <p className="mb-4">Merci pour votre commande. Votre paiement a été effectué avec succès.</p>

      {orderDetails && (
        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Détails de la commande</h2>
          <div className="mb-4">
            <span className="font-semibold">Prénom: </span>{orderDetails.prenom}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Nom: </span>{orderDetails.nom}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Adresse: </span>{orderDetails.adresse}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Région: </span>{orderDetails.region}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Téléphone: </span>{orderDetails.telephone}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Email: </span>{orderDetails.email}
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold">Produits commandés:</h3>
            {orderDetails.products.map((product, index) => (
              <div key={index} className="flex justify-between">
                <span>{product.name} x{product.quantity}</span>
                <span>{(product.amount * product.quantity).toLocaleString()} CFA</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-semibold mt-4">
            <span>Total:</span>
            <span>{orderDetails.totalAmount.toLocaleString()} CFA</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSuccess;

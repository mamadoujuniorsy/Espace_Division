import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import waveImg from '../assets/wave.png'
import orangeImg from '../assets/orange.png';

const OrderPage = () => {
  const orders = useSelector(selectCart);
  const [paymentMethod, setPaymentMethod] = useState('');

  const [clientInfo, setClientInfo] = useState({
    prenom: '',
    nom: '',
    adresse: '',
    region: '',
    telephone: '',
    email: ''
  });

  const totalAmount = orders.reduce((total, item) => {
    const subtotal = Number(item.prix) * Number(item.quantite);
    return isNaN(subtotal) ? total : total + subtotal;
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const orderData = {
    method_of_payment: [paymentMethod.toUpperCase()],
    products: orders.map(item => ({
      name: item.description,
      category: 'electromenagers',
      amount: Number(item.prix),
      quantity: Number(item.quantite),
      description: item.description
    })),
    is_escrow: false,
    is_merchant: true
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("order data ",orderData)
    try {
      const response = await fetch('https://api.naboopay.com/api/v1/transaction/create-transaction', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer naboo-68f9085d-21ea-4f5c-83dc-ca65de2b78f3.7e00ca2b-326e-46d8-b9b1-f16e6b01dad4'
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Erreur lors de l\'initialisation du paiement avec Naboo', errorDetails);
        throw new Error('Erreur lors de l\'initialisation du paiement avec Naboo');
      }

      const data = await response.json();
      // Redirection vers l'URL de checkout
      window.location.href = data.checkout_url;
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du paiement avec Naboo', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 border rounded-md shadow-lg grid grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Informations du Client</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" id="prenom" name="prenom" className="mt-1 p-2 border w-full rounded-md" onChange={handleInputChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" id="nom" name="nom" className="mt-1 p-2 border w-full rounded-md" onChange={handleInputChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">Adresse</label>
                <input type="text" id="adresse" name="adresse" className="mt-1 p-2 border w-full rounded-md" onChange={handleInputChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">Région / Département</label>
                <input type="text" id="region" name="region" className="mt-1 p-2 border w-full rounded-md" onChange={handleInputChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input type="text" id="telephone" name="telephone" className="mt-1 p-2 border w-full rounded-md" onChange={handleInputChange} />
              </div>
              <div className="mb-4 col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border w-full rounded-md" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Récapitulatif de la Commande</h2>
            <div className="border p-4">
              <div className="border-b mb-4 pb-4">
                {orders.map(item => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <span>{item.description}</span>
                    <span>{(Number(item.prix) * Number(item.quantite)).toLocaleString()} CFA</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">{totalAmount.toLocaleString()} CFA</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Options de Paiement</h3>
            <div className="flex items-center space-x-4">
              <input type="radio" id="wave" name="methodePaiement" value="wave" className="mr-2" onChange={() => setPaymentMethod('wave')} />
              <img src={waveImg} alt='image-wave' height={50} width={50}/>
              <label htmlFor="wave" className="text-sm font-medium text-gray-700">
                Wave
              </label>
              <input type="radio" id="orange" name="methodePaiement" value="orange" className="mr-2" onChange={() => setPaymentMethod('orange')} />
              <img src={orangeImg} alt='image-orange' height={50} width={50}/>
              <label htmlFor="orange" className="text-sm font-medium text-gray-700">
                Orange Money
                </label>
              <input type="radio" id="freeMoney" name="methodePaiement" value="freeMoney" className="mr-2" onChange={() => setPaymentMethod('freeMoney')} />
              <label htmlFor="freeMoney" className="text-sm font-medium text-gray-700">Free Money</label>
            </div>
          </div>

          <div className="mt-8">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Valider la Commande</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OrderPage;

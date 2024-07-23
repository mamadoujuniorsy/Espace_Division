import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart, selectCart } from '../store/cartSlice';
import { createOrder } from '../store/orderSlice';
import { getImageUrl } from '../utils';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const orders = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleRemoveFromOrder = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleCheckout = async () => {
    const totalAmount = orders.reduce((total, item) => {
      const subtotal = Number(item.prix) * Number(item.quantite);
      return isNaN(subtotal) ? total : total + subtotal;
    }, 0);

    try {
      const response = await dispatch(createOrder({ products: orders, totalAmount }));
      if (response.payload.success) {
        toast.success('Commande passée avec succès!');
        dispatch(clearCart());
        localStorage.removeItem('orders');
        navigate('/');
      } else {
        toast.error('Erreur lors de la commande');
      }
    } catch (error) {
      console.error('Erreur lors de la commande:', error);
      toast.error('Erreur lors de la commande');
    }
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Votre Panier</h1>
      {orders.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {orders.map(item => (
                <div key={item.id} className='mb-4 border p-4'>
                  <div className='flex items-center mb-2'>
                    <img src={getImageUrl(item.image)} alt={item.description} className='h-24 w-24 object-contain mr-4' />
                    <div>
                      <h2 className='text-lg font-bold'>{item.description}</h2>
                      <p>Quantité:
                        <button
                          className='bg-gray-200 px-2 py-1 rounded'
                          onClick={() => handleDecreaseQuantity(item.id)}
                          disabled={item.quantite <= 1}
                        >
                          -
                        </button>
                        {item.quantite}
                        <button
                          className='bg-gray-200 px-2 py-1 rounded'
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </p>
                      <div>
                      <p>Prix unitaire: {Number(item.prix).toLocaleString()} CFA</p>
                      <p>Sous-total: {(Number(item.prix) * Number(item.quantite)).toLocaleString()} CFA</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className='bg-red-500 text-white px-2 py-1 rounded'
                    onClick={() => handleRemoveFromOrder(item.id)}
                  >
                    Retirer
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div className='border p-4'>
                <h2 className='text-xl font-bold mb-4'>Récapitulatif de la commande</h2>
                <ul>
                  {orders.map(item => (
                    <li key={item.id} className='flex justify-between mb-2'>
                      <span>{item.description}</span>
                      <span>{(Number(item.prix) * Number(item.quantite)).toLocaleString()} CFA</span>
                    </li>
                  ))}
                </ul>
                <div className='border-t mt-4 pt-4'>
                  <h3 className='text-lg font-bold'>Total: {orders.reduce((total, item) => total + (Number(item.prix) * Number(item.quantite)), 0).toLocaleString()} CFA</h3>
                </div>
                <Link to='/validation-commande' className='bg-green-500 text-white px-4 py-2 rounded mt-5'>
                  commander
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { getImageUrl } from '../utils';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchProductsByCategory, selectProductsByCategory } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const CategoryProduct = ({ category }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => selectProductsByCategory(state, category));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsByCategory(category));
  }, [category, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Utilise addToCart pour ajouter un produit au panier
    toast.success('Produit ajouté au panier avec succès!');
  };

  const renderStars = (note) => {
    return Array(note).fill(0).map((_, index) => (
      <FaStar key={index} className="text-yellow-500" />
    ));
  };

  return (
    <div>
      <Link to="/" className='py-[180px]'>
        Accueil
      </Link>
      <h1 className='h-full text-center w-full m-3'>Produits de la catégorie {category}</h1>
      <div className='lg:grid lg:grid-cols-3 sm:flex sm:flex-col justify-center items-center gap-5 bg-gray-100 p-4 lg:p-0'>
        {products.map(product => (
          <motion.div
            key={product.id}
            className="max-w-sm mx-auto"
            whileHover={{ scale: 1.05, zIndex: 1, transition: { duration: 0.3 } }}
            onHoverStart={() => setHoveredIndex(product.id)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-4 rounded-md shadow-md">
              <motion.img
                src={getImageUrl(product.image)}
                alt={product.description}
                height={300}
                width={300}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.h2 className="text-center text-lg font-medium text-green-300">
                {product.stock > 0 ? "En stock" : "En rupture"}
              </motion.h2>
              <motion.div className="flex justify-center my-2">
                {renderStars(product.note)}
              </motion.div>
              <motion.h2
                className={`${hoveredIndex !== product.id ? "text-center break-words text-2xl font-bold" : "text-emerald-400 text-center"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {product.description}
              </motion.h2>
              <motion.h2
                className={`${hoveredIndex !== product.id ? "text-center break-words text-2xl font-bold text-green-500" : "text-green-500 text-center"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {`${Number(product.prix).toLocaleString()} CFA`}
              </motion.h2>
              <motion.div
                className="flex justify-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  text={hoveredIndex === product.id ? <FaShoppingCart /> : "Ajouter au panier"}
                  onClick={() => handleAddToCart(product)}
                  className="relative flex items-center justify-center w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;

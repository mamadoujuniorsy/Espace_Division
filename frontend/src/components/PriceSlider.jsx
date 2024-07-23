// src/components/PriceSlider.jsx
import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import summaryAPI from '../../common'; // Assurez-vous que le chemin est correct

const PriceSlider = ({ category, setFilteredProducts }) => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1800000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(summaryAPI.get_products.url, {
          method: summaryAPI.get_products.method
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const categoryProducts = data.filter(product => product.category === category);
        setProducts(categoryProducts);
        setFilteredProducts(categoryProducts);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, [category, setFilteredProducts]);

  const handleSliderChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleFilterClick = () => {
    const filtered = products.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='my-4'>
      <h3 className='text-xl font-semibold mb-2'>Filtrer par prix</h3>
      <ReactSlider
        className="w-full h-2 bg-gray-200 rounded-lg"
        thumbClassName="h-6 w-6 bg-blue-500 rounded-full cursor-pointer"
        trackClassName="bg-blue-300"
        min={0}
        max={1800000}
        defaultValue={[0, 1800000]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        pearling
        minDistance={10}
        onChange={handleSliderChange}
      />
      <div className='flex justify-between mt-2'>
        <span>Min: {minPrice} FCFA</span>
        <span>Max: {maxPrice} FCFA</span>
      </div>
      <button 
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
        onClick={handleFilterClick}
      >
        Filtrer
      </button>
    </div>
  );
};

export default PriceSlider;

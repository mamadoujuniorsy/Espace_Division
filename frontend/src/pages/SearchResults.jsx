import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import summaryAPI from '../../common';
import { getImageUrl } from '../utils';
import Button from '../components/Button';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = new URLSearchParams(location.search).get('query');
        console.log('Search query:', query); // Log de la requête de recherche
        if (query) {
          const response = await fetch(`${summaryAPI.search_products.url}?query=${query}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Fetched products:', data); // Log des produits récupérés
          setProducts(data);
        }
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, [location.search]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Résultats de recherche</h1>
      <div className='lg:grid lg:grid-cols-3 sm:flex sm:flex-col justify-center items-center gap-5 bg-gray-100 p-4 lg:p-0'>
        {products.map(product => (
          <div key={product.id} className="max-w-sm mx-auto">
            <div className="bg-white p-4 rounded-md shadow-md">
              <img
                src={getImageUrl(product.image)}
                alt={product.description}
                height={300}
                width={300}
              />
              <h2 className="text-center break-words">{product.description}</h2>
              <h2 className="text-center break-words text-3xl font-bold">
                {product.prix}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

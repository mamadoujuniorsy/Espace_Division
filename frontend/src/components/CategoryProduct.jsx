import { useState, useEffect } from 'react';
import { getImageUrl } from '../utils';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import summaryAPI from '../../common'; // Assurez-vous que le chemin est correct

const CategoryProduct = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        setProducts(data.filter(product => product.category === category));
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <Link to="/" className='py-[180px]'>
        Accueil
      </Link>
      <h1 className='h-full text-center w-full'>Produits de la catégorie {category}</h1>
      <div className='lg:grid lg:grid-cols-3 sm:flex sm:flex-col justify-center items-center gap-5 bg-gray-100 p-4 lg:p-0'>
        {products.map(product => (
          <div key={product.id} onMouseEnter={() => setHoveredIndex(product.id)} onMouseLeave={() => setHoveredIndex(null)} className="max-w-sm mx-auto">
            <div className="bg-white p-4 rounded-md shadow-md">
              <img 
                src={getImageUrl(product.image)} 
                alt={product.description}
                height={300}
                width={300} 
              />
              <h2 className={`${hoveredIndex !== product.id ? "text-center break-words" : "text-emerald-400 text-center"}`}>
                {product.description}
              </h2>
              <h2 className={`${hoveredIndex !== product.id ? "text-center break-words text-3xl font-bold" : "text-center"}`}>
                {hoveredIndex === product.id ? (
                  <Button 
                    text="Ajouter au panier"
                  /> 
                ) : (
                  product.prix 
                )}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;

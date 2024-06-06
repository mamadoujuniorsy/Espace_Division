import { useState} from 'react';
import Button from '../components/Button'; 
import bestSells from '../data/bestSells.json';
import { getImageUrl } from '../utils';

const BestSell = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // État local pour suivre l'index survolé

  return (
    <div className="mt-14">
      <h1 className="text-5xl text-center font-bold">
        Meilleures Ventes
      </h1>
      <div className="mt-14 lg:grid lg:grid-cols-4 sm:flex sm:flex-col justify-center items-center gap-14">
        {bestSells.map((best, index) => (
          <div key={best.image} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
            <img
              src={getImageUrl(best.image)}
              alt={best.description}
              height={300}
              width={300}
            />
            <h2 className={`${hoveredIndex !== index ?
               "text-center break-words" : "text-emerald-400 text-center"}`}>
              {best.description}
            </h2>
            <h2 className={`${hoveredIndex !== index ?
               "text-center break-words text-3xl font-bold" : "text-center"}`}>
              {hoveredIndex === index ? (
                <Button 
                  text="Ajouter au panier"
                /> // Affiche le bouton au survol du prix
              ) : (
                best.prix // Affiche le prix par défaut
              )}
            </h2>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSell;

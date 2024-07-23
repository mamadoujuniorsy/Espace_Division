/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPhonePortrait } from "react-icons/io";

const categories = [
  { name: 'Téléphones', path: '/telephones' },
  { name: 'Électroménagers', path: '/electromenagers' },
  { name: 'Télévisions', path: '/televisions' },
  { name: 'Consoles', path: '/consoles' },
  { name: 'Électroniques', path: '/electroniques' },
  { name: 'Climatiseurs', path: '/climatiseurs' },
  { name: 'Imprimantes', path: '/imprimantes' },
  { name: 'Promotions', path: '/promo' },
  { name: 'Ordinateurs', path: '/ordinateurs' }
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <button  onClick={toggleSidebar} className="p-4">X Fermer</button>
      <ul className="mt-4">
        {categories.map(category => (
          <li key={category.name} className="p-4 hover:bg-gray-700 flex items-center">
            <Link to={category.path} onClick={toggleSidebar}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

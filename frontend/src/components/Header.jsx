import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { CiSearch } from 'react-icons/ci';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import summaryAPI from '../../common';
import { selectCart } from '../store/cartSlice';
import { setUserDetails } from '../store/userSlice';

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch(setUserDetails(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(summaryAPI.logout_user.url, {
        method: summaryAPI.logout_user.method,
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        dispatch(setUserDetails(null));
        localStorage.removeItem('user');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      toast.error('Erreur lors de la déconnexion');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  return (
    <header className='h-16 shadow-md flex items-center justify-between px-4'>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className='flex items-center gap-4'>
        <button onMouseEnter={toggleSidebar} className='text-2xl'>
          <FaBars />
        </button>
        <Link to="/">
          <img
            src={logo}
            alt='logo'
            width='90'
            height='60'
          />
        </Link>
      </div>
      <form onSubmit={handleSearch} className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
        <input
          type='search'
          placeholder='Rechercher produits...'
          className='w-full outline-none'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='text-lg min-w-[50px] flex items-center justify-center rounded-full h-8 bg-black text-white font-bold'>
          <CiSearch />
        </button>
      </form>
      <div className='flex items-center gap-4'>
        <div className='text-3xl cursor-pointer'>
          <FaRegCircleUser />
        </div>
        <Link to="/cart" className='text-2xl relative'>
          <span><FaShoppingCart /></span>
          {cart.totalQuantity > 0 && (
            <div className='bg-red-600 text-white h-5 w-5 flex items-center justify-center p-1 rounded-full absolute -top-2 -right-3'>
              <p className='text-sm'>{cart.totalQuantity}</p>
            </div>
          )}
        </Link>
        <div>
          {user ? (
            <button className='px-2 bg-black rounded-full text-white py-1' onClick={handleLogout}>
              Déconnexion
            </button>
          ) : (
            <Link to="/login" className='px-2 bg-black rounded-full text-white py-1'>
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

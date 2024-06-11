/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { CiSearch } from 'react-icons/ci';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import summaryAPI from '../../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import Sidebar from './Sidebar';

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    const fetchData = await fetch(summaryAPI.logout_user.url, {
      method: summaryAPI.logout_user.method,
      credentials: 'include'
    });
    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message);
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
        <div className='text-2xl relative'>
          <span><FaShoppingCart /></span>
          <div className='bg-red-600 text-white h-5 w-5 flex items-center justify-center p-1 rounded-full absolute -top-2 -right-3'>
            <p className='text-sm'>0</p>
          </div>
        </div>
        <div>
          {user?._id ? (
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

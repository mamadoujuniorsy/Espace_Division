/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/logo.png"
import { CiSearch } from 'react-icons/ci'
import { FaRegCircleUser } from 'react-icons/fa6' 
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import summaryAPI from '../../common'
import {toast} from 'react-toastify'
import {setUserDetails} from '../store/userSlice'
function Header() {
  const user = useSelector(state => state?.user?.user)
  console.log("user header", user)
  const dispatch = useDispatch();
  const handleLogout =async ()=>{
    const fecthData = await fetch(summaryAPI.logout_user.url,{
        method: summaryAPI.logout_user.method,
        credentials: 'include'
      })
      const data = await fecthData.json()
      if(data.success){
        toast.success(data.message)
        dispatch(setUserDetails(null))
      }
      if(data.error){
        toast.error(data.message)
      }
  }
  return (
    <header className='h-16 shadow-md'>
      <div className='h-full container mx-auto flex items-center px-4
      justify-between'>
        <div>
          <Link to="/">
            <img 
              src={logo}
              alt='logo'
              width='90'
              height='60'
            />
          </Link>

      
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm
        border rounded-full focus-within:shadow pl-2'>
          <input 
            type='search'
            placeholder='rechercher produits...'
            className='w-full outline-none'
          />
          <div className='text-lg min-w-[50px] flex items-center justify-center
          rounded-full h-8 bg-black text-white font-bold'>
            <CiSearch/>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser/>
          </div>
          <div className='text-2xl relative'>
            <span><FaShoppingCart/></span>
            <div className='bg-red-600 text-white h-5 w-5 flex items-center 
            justify-center p-1 rounded-full absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>
          <div>
            {
              user?._id ?(
                <button className='px-2 bg-black rounded-full text-white py-1'
                onClick={handleLogout}>
                  Déconnexion
                </button>
              ):(
              <Link to="/login" className='px-2 bg-black rounded-full text-white py-1'>
              Connexion
            </Link>)
            }
           
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header

import React from 'react'
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import drapeau from '../../assets/drapeau_senegal.png'
import { IoMdSunny } from "react-icons/io";
const AdminHeader = () => {
  return (
    <div className='w-full bg-white h-14 flex justify-between items-center'>
      <div className='relative'>
      <CiSearch
        fontSize={25}
        className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
      />
        <input
          type='search'
          placeholder='rechercher...'
          className='text-sm focus:outline-none h-10 w-[20rem] border border-gray-300 rounded-sm pr-4 pl-11'
        />
      </div>
      <div className='flex items-center m'>
      <img 
          src={drapeau}
          alt='drapeau'
          width={30}
          height={30}
          className='mr-4'
        />
        <IoMdSunny
          fontSize={25}
          className='mr-4'
        />
        <IoPerson
          fontSize={25}
          className='mr-4'
        />
      </div>
      </div>
   
  )
}

export default AdminHeader

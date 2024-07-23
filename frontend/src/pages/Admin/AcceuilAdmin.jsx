/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import AreaChart from '../../components/Admin/AreaChart'
import { ImConnection } from "react-icons/im";
import { ImEye } from "react-icons/im";
import DoughnutChart from '../../components/Admin/DoughnutChart';
import DoughnutChart2 from '../../components/Admin/DoughnutChart2';

const AcceuilAdmin = () => {
  return (
    <div className='flex flex-row bg-slate-100 min-h-screen w-screen overflow-hidden'>
      <AdminSidebar />
      <div className='flex-1'>
        <AdminHeader />
        <div className='bg-white mt-6 mx-4 p-4 rounded-lg shadow-lg'>
          <div className='flex items-center justify-between mb-6'>
            <div className='bg-purple-200 w-[300px] h-[100px] flex flex-col items-center justify-center shadow-xl'>
              <h1>Nombre d'utilisateurs</h1>
              <span>5</span>
            </div>
            <div className='bg-green-100 w-[300px] h-[100px] flex flex-col items-center justify-center shadow-xl'>
              <h1>Chiffres d'affaires</h1>
              <span>569 800 FCFA</span>
            </div>
            <div className='bg-yellow-100 w-[300px] h-[100px] flex flex-col items-center justify-center shadow-xl'>
              <h1>Nombre de visiteurs</h1>
              <span>23</span>
            </div>
          </div>
          <div className='flex justify-center '>
            <AreaChart />
          </div>
        </div>
        <div className='flex mt-9 shadow-lg items-center justify-between mx-4'>
          <div className='flex gap-3'>
            <div className='bg-white flex justify-center flex-col items-center w-[200px] h-[200px] rounded-lg shadow-lg'>
              <h1>sessions</h1>
              <ImConnection className='ml-20  bg-slate-300 rounded-full p-1' fontSize={25}/>
              <h2 className='font-bold'>17</h2>
              <h3 className='mt-7 text-green-400'>0 %</h3>
              <p className='text-center text-sm font-light'>par rapport au dernier mois</p>
            </div>
            <div className='bg-white flex justify-center flex-col items-center w-[200px] h-[200px] rounded-lg shadow-lg'>
              <h1>Vues de la page</h1>
              <ImEye className='ml-20 bg-slate-300 rounded-full p-1' fontSize={25}/>
              <h2 className='font-bold'>20</h2>
              <h3 className='mt-7 text-green-400'>0%</h3>
              <p className='text-center text-sm font-light'>par rapport au dernier mois</p>
            </div>
          </div>
          <div className='bg-white flex justify-center rounded-lg shadow-lg'>
            <h1>Nouveaux vs retours visiteurs</h1>
            <DoughnutChart/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcceuilAdmin

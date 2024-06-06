import { Outlet } from 'react-router-dom';
import Footer from "./sections/Footer";
import Header from './components/Header';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import summaryAPI from '../common';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(summaryAPI.current_user.url,{
      method: summaryAPI.current_user.methhod,
      credentials: 'include'
    })
    const dataApi = await dataResponse.json()
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
    console.log("data Api", dataApi)
  }
  
  useEffect(()=>{
    fetchUserDetails();
  },[])
  return (
    <>
    <ToastContainer/>
      <Header />
      <main className='min-h-[calc(100vh-120px)] pt-16'>
        <Outlet />
      </main>
      <Footer/>
    </>
    
  );
}



export default App;

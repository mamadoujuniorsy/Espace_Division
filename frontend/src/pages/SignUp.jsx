/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import loginIcon from "../assets/signin.gif"
import { FaEye } from 'react-icons/fa6'
import { FaEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import summaryAPI from '../../common';
import { toast } from 'react-toastify';
function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const[data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    role: ""
  });
  const navigate = useNavigate()
  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(data.password === data.confirmPassword){
      const dataResponse = await fetch(summaryAPI.signUP.url,{
        method: summaryAPI.signUP.method,
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
      })
      const dataApi = await dataResponse.json()

      if(dataApi.success){
        toast.success(dataApi.message)
        navigate("/login")
      }
      if(dataApi.error){
        toast.error(dataApi.message)
      }
    
      console.log("data", dataApi)  
    }else{
      console.log("les deux mots de passe ne correspondent pas")
    }
    
  }
  return (
    <section id='signup'>
      <div className='mx-auto container p-4'>
        <div className='bg-red-300 py-5 p-2 w-full max-w-md mx-auto'>
          <div className='w-20 h-20 mx-auto'>
            <img 
              src={loginIcon} alt='login icon'
            />
          </div>
          <form className='pt-6 flex flex-col gap-2' 
          onSubmit={handleSubmit}>
            <div>
                <label>Nom Complet : </label>
                <div className='bg-slate-200 p-2'>
                <input type='text' placeholder='Entrez votre nom complet'
                className='w-full h-full outline-none bg-transparent'
                onChange={handleOnChange}
                name='name'
                value={data.fullname}
                required/>
                </div>
              </div>
            <div>
              <label>Email : </label>
              <div className='bg-slate-200 p-2'>
               <input type='text' placeholder='Entrez votre email'
               className='w-full h-full outline-none bg-transparent'
               onChange={handleOnChange}
               name='email'
               value={data.email}
               required/>
              </div>
            </div>
            <div>
              <label>Mot de passe : </label>
              <div className='bg-slate-200 p-2 flex items-center'>
                <input type={showPassword ? '': 'password'} 
                placeholder='Entrez votre mot de passe'
                className='w-full h-full outline-none bg-transparent'
                onChange={handleOnChange}
                name='password'
                value={data.password}
                required/>
                <div className='cursor-pointer text-xl'
                onClick={()=>setShowPassword((prev)=> !prev)}>
                  <span>
                    {
                      showPassword ? (<FaEye />) : (<FaEyeSlash/>)
                    }
                  </span>
                </div>              
              </div>
            </div>

            <div>
              <label>Confirmer Mot de passe : </label>
              <div className='bg-slate-200 p-2 flex items-center'>
                <input type={showPassword ? '': 'password'} 
                placeholder='Entrez votre mot de passe'
                className='w-full h-full outline-none bg-transparent'
                onChange={handleOnChange}
                name='confirmPassword'
                value={data.confirmPassword}
                required/>
                <div className='cursor-pointer text-xl'
                onClick={()=>setShowConfirmPassword((prev)=> !prev)}>
                  <span>
                    {
                      showConfirmPassword ? (<FaEye />) : (<FaEyeSlash/>)
                    }
                  </span>
                </div>              
              </div>
            </div>

            <button className='bg-black text-white w-full rounded-full mx-auto block
            max-w-[150px] hover:scale-110 transition-all px-6 py-2 mt-3 text-bold'>
              Créer compte
            </button>
          </form>
          <p className='my-5'>
            vous avez déja un compte?
            <Link to={'/login'} className='text-red-600 hover:underline'>
                 se connecter   
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp


import React, { useState } from 'react';
import loginIcon from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import summaryAPI from '../../common';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice'; // Assurez-vous d'importer setUserDetails

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    role: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Utilisation de dispatch pour mettre à jour l'état utilisateur

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataResponse = await fetch(summaryAPI.signIN.url, {
        method: summaryAPI.signIN.method,
        credentials: 'include',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const dataApi = await dataResponse.json();
  
      if (dataApi.success) {
        toast.success(dataApi.message);

        // Mise à jour de l'état utilisateur avec Redux
        dispatch(setUserDetails({ email: data.email, role: dataApi.role }));

        if (dataApi.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("Erreur lors de la connexion");
      console.error("Erreur lors de la connexion", error);
    }
  };

  return (
    <section id='login'>
      <div className='mx-auto container p-4'>
        <div className='bg-red-300 py-5 p-2 w-full max-w-md mx-auto'>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcon} alt='login icon' />
          </div>
          <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div>
              <label>Email : </label>
              <div className='bg-slate-200 p-2'>
                <input type='text' placeholder='Entrez votre email'
                  className='w-full h-full outline-none bg-transparent'
                  onChange={handleOnChange}
                  name='email'
                  value={data.email} />
              </div>
            </div>
            <div>
              <label>Mot de passe : </label>
              <div className='bg-slate-200 p-2 flex items-center'>
                <input type={showPassword ? '' : 'password'} 
                  placeholder='Entrez votre mot de passe'
                  className='w-full h-full outline-none bg-transparent'
                  onChange={handleOnChange}
                  name='password'
                  value={data.password} />
                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}>
                  <span>
                    {showPassword ? (<FaEye />) : (<FaEyeSlash />)}
                  </span>
                </div>
              </div>
              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                Mot de passe oublié?
              </Link>
            </div>

            <button className='bg-black text-white w-full rounded-full mx-auto block max-w-[150px] hover:scale-110 transition-all px-6 py-2 mt-3 text-bold'>
              se connecter
            </button>
          </form>
          <p className='my-5'>
            pas de compte?
            <Link to={'/sign-up'} className='text-red-600 hover:underline'>
              créer compte   
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login;

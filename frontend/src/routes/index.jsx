/* eslint-disable no-unused-vars */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import Home from '../components/Home'
import PhonesPage from "../pages/PhonesPage";
import Electromenager from "../pages/Electromenager";
import Television from "../pages/Television";
import Electronique from '../pages/Electronique';
import Climatiseur from '../pages/Climatiseur';
import Imprimante from '../pages/Imprimante';
import Promo from '../pages/Promo';
import Console from '../pages/Console';
import Ordinateur from '../pages/Ordinateur';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import SearchResults from '../pages/SearchResults';
import AdminPanel from '../pages/admin/AdminPanel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"/telephones",
        element: <PhonesPage/>
      },
      {
        path:"/electromenagers",
        element: <Electromenager/>
      },
      {
        path:"/televisions",
        element: <Television/>
      },
      {
        path:"/consoles",
        element: <Console/>
      },
      {
        path:"/electroniques",
        element: <Electronique/>
      },
      {
        path:"/climatiseurs",
        element: <Climatiseur/>
      },
      {
        path:"/imprimantes",
        element: <Imprimante/>
      },
      {
        path:"/promo",
        element: <Promo/>
      },
      {
        path:"/ordinateurs",
        element: <Ordinateur/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/forgot-password",
        element: <ForgotPassword/>
      },
      {
        path:"/sign-up",
        element: <SignUp/>
      },
      {
        path:"/admin/admin-panel",
        element: <AdminPanel/>
      },
      {
        path:"/search-results",
        element: <SearchResults/>
      },
    ]
  }
]
)
export default router;
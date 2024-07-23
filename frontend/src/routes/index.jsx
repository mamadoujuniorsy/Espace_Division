import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import PhonesPage from '../pages/PhonesPage';
import Electromenager from '../pages/Electromenager';
import Television from '../pages/Television';
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
import AcceuilAdmin from '../pages/Admin/AcceuilAdmin';
import Kanban from '../components/Admin/Kanban';
import UserManagement from '../components/Admin/userManagement';
import CartPage from '../components/cartPage';
import AdminLayout from '../components/Admin/AdminLayout';
import OrderPage from '../components/orderPage';
import OrderSuccess from '../components/orderSuccess';
import ProductManagement from '../components/Admin/ProductManagement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '/telephones', element: <PhonesPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/electromenagers', element: <Electromenager /> },
      { path: '/televisions', element: <Television /> },
      { path: '/consoles', element: <Console /> },
      { path: '/electroniques', element: <Electronique /> },
      { path: '/climatiseurs', element: <Climatiseur /> },
      { path: '/imprimantes', element: <Imprimante /> },
      { path: '/promo', element: <Promo /> },
      { path: '/ordinateurs', element: <Ordinateur /> },
      { path: '/login', element: <Login /> },
      { path: '/order-success', element: <OrderSuccess /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/search-results', element: <SearchResults /> },
      { path: '/validation-commande', element: <OrderPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '', element: <AcceuilAdmin /> },
      { path: 'kanban', element: <Kanban /> },
      { path: 'gestion-utilisateur', element: <UserManagement /> },
      { path: 'gestion-produit', element: <ProductManagement /> },
    ],
  },
]);

export default router;

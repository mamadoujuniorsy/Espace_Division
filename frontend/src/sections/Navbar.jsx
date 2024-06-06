import logo from "../assets/logo.png"
import {BsSearch} from "react-icons/bs"
import { LiaShoppingBagSolid } from "react-icons/lia"
import CartCountBadge from "../components/CartCountBadge"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky
    top-0 left-0 w-full bg-white shadow-md py-3 px-6 z-10">
      <div className="container  hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <div className="flex">
            <img 
              src={logo}
              alt="logo"
              height={100}
              width={100}
            />
            <h2 className="text-4xl font-medium">
              Espace<br/>Division
            </h2>
          </div>
          <div className="relative w-full max-w-[500px]">
            <BsSearch 
              size={20}
              className="absolute top-0 right-0 mt-3 mr-5
               text-gray-500"
            />
            <input 
              type="text"
              placeholder="Rechercher produits..."
              className="bg-[#f2f3f5] border-none outline-none px-6
               py-3 rounded-[30px] w-full"
            />
          </div>
          <div className="flex gap-16">
            <button className="mr-7 border border-black text-2xl bg-black text-white
            hover:text-black hover:bg-white rounded-[30px] px-5 
            py-2 cursor-pointer border-solid">
              Espace Client
            </button>
            <div className="relative">
              <LiaShoppingBagSolid 
                size={40}
                className="absolute right-7 max-lg:mb-5"
              />
              <CartCountBadge 
                size="w-[25px] h-[25px]"
              />
            </div> 
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Navbar

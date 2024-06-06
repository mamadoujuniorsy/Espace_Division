import logo from "../assets/logo.png"
import {BsSearch} from "react-icons/bs"
import { LiaShoppingBagSolid } from "react-icons/lia"
import {IoIosMenu} from "react-icons/io"
import {AiOutlineUser} from "react-icons/ai"
import CartCountBadge from "../components/CartCountBadge"
const MobNavbar = () => {
  return (
    <div className="flex justify-between items-center sticky
    top-0  bg-white shadow-md py-3 px-6 z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-6">
            <IoIosMenu size={30}/>
            <BsSearch size={24}/>
          </div>
          <h2>
            Espace<br/>Division
          </h2>
          <div className="flex gap-4 text-[30px]">
            <AiOutlineUser />
            <div className="relative cursor-pointer">
              <LiaShoppingBagSolid 
              />
              <CartCountBadge
                size="w-[20px] h-[20px]"
              />
            </div>
         </div>
        </div>
      </div>      
    </div>
  )
}

export default MobNavbar

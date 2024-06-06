import Image1 from "../assets/images/categories/macbook.png";
import { Link } from "react-router-dom";
const Category4 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-row flex-wrap gap-14 justify-center items-center">
                   {/*colonne1*/}
          <Link to="/ordinateurs">
            <div className="py-10 pl-2 text-white rounded-3xl bg-gray-300
            relative flex items-end h-[320px]
            w-[820px]">
              <div>
                <div className="mb-4 absolute top-[20%]">
                  <p className="text-4xl text-black font-extrabold
                  absolute ml-[30px]">
                    Ordinateurs
                  </p>
                  <p className="text-8xl text-white font-extrabold
                  absolute ml-[30px] mt-[20px] py-3 capitalize">
                    Qualité
                  </p>
                </div>
              </div>
              <img 
                src={Image1} alt="consoles"
                className="absolute w-[200px] right-0 bottom-[-30px]"
              />
            </div>
          </Link>                  
        </div>
      </div>
    </div>
  )
}

export default Category4

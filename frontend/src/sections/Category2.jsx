import Image1 from "../assets/images/categories/electronique.png";
import Image2 from "../assets/images/categories/gaming.png";
import { Link } from "react-router-dom";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-row flex-wrap gap-14 justify-center items-center">
                   {/*colonne1*/}
          <Link to="/consoles">
            <div className="py-10 pl-2 text-white rounded-3xl bg-gray-300
            relative flex items-end h-[320px]
            w-[620px]">
              <div>
                <div className="mb-4 absolute top-[20%]">
                  <p className="text-4xl text-black font-extrabold
                  absolute ml-[30px]">
                    Nouveautés
                  </p>
                  <p className="text-8xl text-white font-extrabold
                  absolute ml-[30px] mt-[20px] py-3 capitalize">
                    CONSOLES
                  </p>
                </div>
              </div>
              <img 
                src={Image2} alt="consoles"
                className="absolute w-[200px] right-0 bottom-[-30px]"
              />
            </div>
          </Link>         
          
          {/*colonne2*/}
          <Link to="/electroniques">
            <div className="py-10 pl-5 text-white rounded-3xl bg-orange-500
            relative flex items-end h-[320px]
            w-[620px]">
              <div>
                <div className="mt-[60px] absolute top-[20%] ml-[50px]">
                  <p className="text-xl font-semibold">
                    Vidéos projecteurs
                  </p>
                  <p className="font-extrabold text-red-100 text-2xl">
                    Ondulateurs & régulateurs
                  </p>
                  <p className="font-extrabold text-red-950 text-6xl">
                    Electroniques
                  </p>
                </div>
              </div>
              <img 
                src={Image1} alt="televisions"
                className="absolute top-0 right-0 w-[300px]"
              />
            </div>
          </Link>
         
        </div>
      </div>
    </div>
  )
}

export default Category2

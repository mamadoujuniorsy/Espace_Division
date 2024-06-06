import Image1 from "../assets/images/categories/phone.png";
import Image2 from "../assets/images/categories/electromenager.png";
import Image3 from "../assets/images/categories/tv.png";
import { Link } from "react-router-dom";

const Category1 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-row flex-wrap gap-14 justify-center items-center">
          {/* Colonne1 */}
          <Link to="/telephones">
          <div className="py-10 pl-5 text-white rounded-3xl bg-gradient-to-br
            from-black/90 to-black/70 relative flex items-end h-[320px]
            w-[320px]">
              <div>
                <div className="mb-4 absolute top-[20%]">
                  <p className="text-2xl">
                    Téléphones &
                  </p>
                  <p className="text-4xl text-zinc-600 font-extrabold">
                    Tablettes
                  </p>
                </div>
              </div>
              <img 
                src={Image1} alt="telephone et tablettes"
                className="absolute w-[300px] bottom-0 ml-[50px]"
              />
            </div>
          </Link>

          {/* Colonne2 */}
          <Link to ="/electromenagers">
            <div className="py-10 pl-2 text-white rounded-3xl bg-gray-300
            relative flex items-end h-[320px]
            w-[520px]">
              <div>
                <div className="mb-4 absolute top-[20%]">
                  <p className="text-1xl text-black absolute ml-[30px] mt-[-30px]">
                    Qualité
                  </p>
                  <p className="text-4xl text-black font-extrabold
                  absolute ml-[30px]">
                    Electroménagers
                  </p>
                  <p className="text-8xl text-white font-extrabold
                  absolute ml-[30px] mt-[20px] py-3 capitalize">
                    Appareils
                  </p>
                </div>
              </div>
              <img 
                src={Image2} alt="electroménagers"
                className="absolute w-[200px] right-0 bottom-[-30px]"
              />
            </div>
          </Link>
          
          {/* Colonne3 */}
          <Link to="/televisions">
            <div className="py-10 pl-5 text-white rounded-3xl bg-pink-300
            relative flex items-end h-[320px]
            w-[460px]">
              <div>
                <div className="mb-4 absolute top-[20%]">
                  <p className="text-2xl text-fuchsia-800">
                    Smart Tv
                  </p>
                  <p className="text-4xl text-fuchsia-800 font-extrabold">
                    Télévisions
                  </p>
                </div>
              </div>
              <img 
                src={Image3} alt="televisions"
                className="absolute w-[400px] right-0 bottom-[-50px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category1;

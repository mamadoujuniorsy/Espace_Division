import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from "../utils";
import hero from "../data/hero.json"
import Button from "../components/Button";
const Hero = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  
  return (
    <div className="justify-center items-center relative mt-5
    bg-gradient-to-r from-gray-900 to-gray-800 
    w-3/4 m-auto rounded-3xl">
      <Slider {...settings} className="justify-center items-center">
        {hero.map((h) => (
          <div key={h.id}>
            <img 
              src={getImageUrl(h.image)}
              alt={`image-${h.id}`}
              className="relative m-auto"
              height={300}
              width={300}
            />
            <h1 className="text-white text-center font-extrabold break-words">
              {h.description}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

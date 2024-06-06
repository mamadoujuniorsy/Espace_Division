import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alcatel from "../assets/images/partners/alcatel.png";
import apple from "../assets/images/partners/apple.png";
import dell from "../assets/images/partners/dell.png";
import hp from "../assets/images/partners/hp.png";
import kaggu from "../assets/images/partners/kaggu.png";
import lenovo from "../assets/images/partners/lenovo.png";
import lexmark from "../assets/images/partners/lexmark.png";
import riso from "../assets/images/partners/riso.png";
import tcl from "../assets/images/partners/tcl.png";
import vestel from "../assets/images/partners/vestel.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        zIndex: 1,
        width: "50px", 
        height: "50px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        zIndex: 1,
        width: "50px", 
        height: "50px",
      }}
      onClick={onClick}
    />
  );
}

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  
  const images = [alcatel, apple, dell, hp, kaggu, lenovo, lexmark,
    riso,tcl,vestel];

  return (
    <div className="slider-container bg-black mt-10">
      <Slider {...settings} className="justify-center items-center">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`image-${index}`}
              className="h-auto max-h-32 lg:max-h-40 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;


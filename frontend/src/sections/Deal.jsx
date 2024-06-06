import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal1 from "../assets/images/deals/deal1.png";
import deal2 from "../assets/images/deals/deal2.png";
import deal3 from "../assets/images/deals/deal3.png";
import deal4 from "../assets/images/deals/deal4.png";
import deal5 from "../assets/images/deals/deal5.png";
import deal6 from "../assets/images/deals/deal6.png";
import deal7 from "../assets/images/deals/deal7.png";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "2px",
        textAlign: "center",
        color: "white",
        zIndex: "1",
        border: "2px solid black"
      }}
      onClick={onClick}
    />
  );
}

const Deal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow className="slick-next" />,
    prevArrow: <Arrow className="slick-prev" />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [deal1, deal2, deal3, deal4, deal5, deal6, deal7];

  return (
    <div className="slider-container w-3/4 m-auto mt-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`image-${index}`}
              height={400}
              width={300}
              className="mx-auto rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Deal;

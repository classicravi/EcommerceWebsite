import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="./Media/shopping.jpg" alt="" style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              objectPosition: "center",
            }}  />
        </div>
        <div>
          <img src="./Media/Couple_Shopping.jpg" alt="" style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              objectPosition: "center",
            }} />
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel;

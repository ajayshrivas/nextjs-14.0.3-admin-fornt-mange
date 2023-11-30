import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BigSliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Slide 1</h1>
      </div>
      <div className="h-screen bg-green-500 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Slide 2</h1>
      </div>
      <div className="h-screen bg-orange-500 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Slide 3</h1>
      </div>
    </Slider>
  );
};
export default BigSliderBanner;

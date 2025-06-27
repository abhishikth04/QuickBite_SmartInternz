import React from 'react';
import Slider from 'react-slick';
import './CravingSlider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const categories = [
  { name: 'Pizza', img: '/assets/food/pizza.jpg' },
  { name: 'Biryani', img: '/assets/food/biryani.jpg' },
  { name: 'Burgers', img: '/assets/food/burger.jpeg' },
  { name: 'Desserts', img: '/assets/food/desserts.jpg' },
  { name: 'Beverages', img: '/assets/food/beverage.jpg' },
  { name: 'South Indian', img: '/assets/food/south.jpeg' },
  { name: 'Chinese', img: '/assets/food/chinese.jpeg' },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const CravingSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      }
    ]
  };

  return (
    <div className="craving-section">
      <h2>What are you craving for? 🤤</h2>
      <Slider {...settings}>
        {categories.map((item, index) => (
          <div key={index} className="craving-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CravingSlider;

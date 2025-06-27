import React from 'react';
import Slider from 'react-slick';
import './CarouselSlider.css';

const data = [
  {
    title: 'Frydo',
    img: '/assets/carousel/frydo.jpg',
    description: 'Authentic wood-fired pizzas & pasta.',
  },
  {
    title: 'KFC',
    img: '/assets/carousel/burger.jpeg',
    description: 'Juicy burgers with cheesy fries.',
  },
  {
    title: 'Dum Biryani',
    img: '/assets/carousel/biryani.jpeg',
    description: 'Delicious biryanis with rich flavors.',
  },
  {
    title: 'Vindhu',
    img: '/assets/carousel/vindhu.jpg',
    description: 'Tandoori & grilled delicacies.',
  },
  {
    title: 'Italian pasta',
    img: '/assets/carousel/pasta.jpg',
    description: 'Creamy pastas and garlic bread.',
  },
  {
    title: 'Spice Magic',
    img: '/assets/carousel/spicemagic.jpg',
    description: 'Your favorite local Indian bites.',
  },
];

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">🔥 Popular Picks Near You</h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="carousel-card">
            <img src={item.img} alt={item.title} />
            <div className="carousel-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;

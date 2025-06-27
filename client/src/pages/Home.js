// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import HomeHeader from '../components/HomeHeader';
import CarouselSlider from '../components/CarouselSlider';
import CravingSlider from '../components/CravingSlider';
import TopRestaurants from '../components/TopRestaurants';


const Home = () => {
  return (
    <>
      <HomeHeader />
      <HeroSection />
      <CarouselSlider />
      <CravingSlider />
      <TopRestaurants />

    </>
  );
};

export default Home;

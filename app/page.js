import React from 'react';
import Banner from './Components/Home/Banner';
import FeaturedCategories from './Components/Home/FeaturedCategories';
import AdsBanner from './Components/Home/AdsBanner';
import PopularProduct from './Components/Home/PopularProduct';

const page = () => {
  return (
    <div>
      <Banner/>
      <FeaturedCategories/>
      <AdsBanner/>
      <PopularProduct/>
    </div>
  );
}

export default page;

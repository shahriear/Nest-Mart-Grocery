import React from "react";
import Banner from "./Components/Home/Banner";
import FeaturedCategories from "./Components/Home/FeaturedCategories";
import AdsBanner from "./Components/Home/AdsBanner";
import PopularProduct from "./Components/Home/PopularProduct";
import DailyBestSells from "./Components/Home/DailyBestSells";

const page = () => {
  return (
    <div>
      <Banner />
      <FeaturedCategories />
      <AdsBanner />
      <PopularProduct />
      <DailyBestSells />
    </div>
  );
};

export default page;

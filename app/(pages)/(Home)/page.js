import React from "react";
import AdsBanner from "@/app/Components/Home/AdsBanner";
import Banner from "@/app/Components/Home/Banner";
import DailyBestSellsWithBanner from "@/app/Components/Home/DailyBestSells";
import FeaturedCategories from "@/app/Components/Home/FeaturedCategories";
import PopularProduct from "@/app/Components/Home/PopularProduct";
import DealsOfTheDay from "@/app/Components/Home/DealsOfTheDay";
import TopSelling from "@/app/Components/Home/TopSelling";

const page = () => {
  return (
    <div>
      <Banner />
      <FeaturedCategories />
      <AdsBanner />
      <PopularProduct />
      <DailyBestSellsWithBanner />
      <DealsOfTheDay/>
      <TopSelling/>
    </div>
  );
};

export default page;

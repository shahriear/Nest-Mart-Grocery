import AboutFeatures from '@/app/Components/About/AboutFeatures';
import AboutHero from '@/app/Components/About/AboutHero';
import AboutPerformance from '@/app/Components/About/AboutPerformance';
import AboutStats from '@/app/Components/About/AboutStats';
import TeamSection from '@/app/Components/About/TeamSection';
import React from 'react';

const page = () => {
  return (
     <div className="bg-white">
      <AboutHero />
      <AboutFeatures />
      <AboutPerformance />
      <AboutStats />
      <TeamSection/>
    </div>
  );
}

export default page;


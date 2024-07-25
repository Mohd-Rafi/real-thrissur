import React from 'react';
import Header from '../../Components/Header/Header';
import Sliders from '../../Components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Header />
      <Sliders />
      <div className="bg-primary">
        <div className="container mx-auto">
          <div className="text-white flex gap-4 text-xl justify-end py-8">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

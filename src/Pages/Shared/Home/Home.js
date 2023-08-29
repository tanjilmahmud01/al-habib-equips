import React from 'react';
import HeroSection from '../../../components/HeroSection/HeroSection';
import FeaturedProducts from '../../../components/FeaturedProducts/FeaturedProducts';
import BrandSlider from '../../../components/BrandSlider/BrandSlider';
import BannerSlider from '../../../components/BannerSlider/BannerSlider';

const Home = () => {

    const data = {
        name: 'Al Habib Equipments'
    }

    return (
        <>  
             <BannerSlider/>
            <HeroSection myData={data} />

           

            <FeaturedProducts />

            <BrandSlider/>
        </>
    );
};


export default Home;
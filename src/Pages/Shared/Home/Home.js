import React from 'react';
import HeroSection from '../../../components/HeroSection/HeroSection';
import FeaturedProducts from '../../../components/FeaturedProducts/FeaturedProducts';
import BrandSlider from '../../../components/BrandSlider/BrandSlider';
import BannerSlider from '../../../components/BannerSlider/BannerSlider';
import YoutubeSection from '../../../components/YoutubeSection/YoutubeSection';

const Home = () => {

    const data = {
        name: 'AL-HABIB'
    }

    return (
        <>  
             <BannerSlider/>
            <HeroSection myData={data} />

           

            <FeaturedProducts />

            

            <BrandSlider/>

            <YoutubeSection/>
        </>
    );
};


export default Home;
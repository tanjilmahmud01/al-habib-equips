import React from 'react';
import HeroSection from '../../../components/HeroSection/HeroSection';
import FeaturedProducts from '../../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {

    const data = {
        name: 'Al Habib Equipments'
    }

    return (
        <>
            <HeroSection myData={data} />

            <FeaturedProducts />
        </>
    );
};


export default Home;
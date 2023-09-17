import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';

const BannerSlider = () => {

    // slick slider is used in this component. Link: https://react-slick.neostack.com/docs/get-started

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }]
      };
    return (
      <div>
      <Wrapper className="brand-section">
      <div className="container">
        <div style={{marginBottom: "5rem"}}> 
       
        </div>
       
        <Slider {...settings}>

          {/* add a new div with img for a new slide in the slider */}
      
          <div className="slide">
            <img
              src="https://i.ibb.co/jf284dT/carousel-1.jpg"
              alt="Al habib Banner"
            />
          </div>
       
          <div className="slide">
            <img
              src="https://i.ibb.co/tc2gfYs/carousel-2.jpg"
              alt="Al habib Banner"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/Gk83S8Z/carousel-3.jpg"
              alt="Al habib Banner"
            />
          </div>
         
   
        </Slider>
      </div>
    </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 0rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
    
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;
export default BannerSlider;
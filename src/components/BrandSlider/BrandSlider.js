import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
import photo1 from '../../images/brand-1.jpeg';
import photo2 from '../../images/brand-2.jpeg';
import photo3 from '../../images/brand-3.jpeg';
import photo4 from '../../images/brand-4.jpeg';
import photo5 from '../../images/brand-5.jpeg';
import photo6 from '../../images/brand-6.jpeg';
import photo7 from '../../images/brand-7.jpeg';
import photo8 from '../../images/brand-8.jpeg';
import photo9 from '../../images/brand-9.jpeg';
import photo10 from '../../images/brand-10.jpeg';
import photo11 from '../../images/brand-11.jpeg';
import photo12 from '../../images/brand-12.jpeg';
import photo13 from '../../images/brand-13.jpeg';
import photo14 from '../../images/brand-14.jpeg';
import photo15 from '../../images/brand-15.jpeg';
import photo16 from '../../images/brand-16.jpeg';
import photo17 from '../../images/brand-17.jpeg';



const BrandSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        }]
      };
    return (
      <div>
      <Wrapper className="brand-section">
      <div className="container">
        <div> 
        <h3>Brands Working With Al Habib</h3>
        </div>
       
        <Slider {...settings}>
        {/* <div className="brand-section-slider"> */}
          {/* use imgbb direct links in the slide's img source  */}
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo1}
              alt="trusted-brands"
            />
          </div>
          {/* <div className="slide">
            <img
              src="https://i.ibb.co/LNr9JxL/deWalt.png"
              alt="trusted-brands"
            />
          </div> */}
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo2}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
                src={photo3}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
                src={photo4}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
                src={photo5}
              alt="trusted-brands"
            />
          </div>
          
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
                src={photo6}
              alt="trusted-brands"
            />
          </div>
          
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo7}
              alt="trusted-brands"
            />
          </div>
       
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo8}
              alt="trusted-brands"
            />
          </div>
       
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
                src={photo9}
              alt="trusted-brands"
            />
          </div>
       
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
                src={photo10}
              alt="trusted-brands"
            />
          </div>
       
          {/* <div className="slide">
            <img
              src="https://i.ibb.co/vvng08x/ingco.png"
              alt="trusted-brands"
            />
          </div> */}
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo11}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo12}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo13}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo14}
              alt="trusted-brands"
            />
          </div>
         
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo15}
              alt="trusted-brands"
            />
          </div>

          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo16}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              style={{height:'100%', width:'100%'}}
              src={photo17}
              alt="trusted-brands"
            />
          </div>
        
        {/* </div> */}
        </Slider>
      </div>
    </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
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
    min-width: 10rem;
    max-width: 22rem;
    height: 10rem;
    
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
export default BrandSlider;
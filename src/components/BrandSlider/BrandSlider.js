import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';

const BrandSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        }]
      };
    return (
      <div style={{border: "2px solid blue"}}>
      <Wrapper className="brand-section">
      <div className="container">
        <div style={{marginBottom: "5rem"}}> 
        <h3>Brands Working With Al Habib</h3>
        </div>
       
        <Slider {...settings}>
        {/* <div className="brand-section-slider"> */}
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://i.ibb.co/vXXmxFd/Bosch-Logo-2018-present.jpg"
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
              src="https://i.ibb.co/HFGm1V3/dewalt-3.png"
              alt="trusted-brands"
            />
          </div>
          <div style={{border: "2px solid blue"}} className="slide">
            <img
              src="https://i.ibb.co/2dCn4kh/big-red-2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/QK0X1Kg/road-buck.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/m5krFj8/autel.png"
              alt="trusted-brands"
            />
          </div>
          
          <div className="slide">
            <img
              src="https://i.ibb.co/8zKx3ty/ken.png"
              alt="trusted-brands"
            />
          </div>
          
          <div className="slide">
            <img
              src="https://i.ibb.co/vXXmxFd/Bosch-Logo-2018-present.jpg"
              alt="trusted-brands"
            />
          </div>
       
          <div className="slide">
            <img
              src="https://i.ibb.co/mSJ24MF/dong-cheng.webp"
              alt="trusted-brands"
            />
          </div>
       
          <div className="slide">
            <img
              src="https://i.ibb.co/zh9ybHN/Launch-Europe-Logo-Icon.png"
              alt="trusted-brands"
            />
          </div>
       
          <div className="slide">
            <img
              src="https://i.ibb.co/M2mMLB8/niuli.jpg"
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
              src="https://i.ibb.co/4TRf4WB/ingco-2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/ZghF0f8/noblift.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/rswWhC2/yato.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/r4dW8bF/toptul.png"
              alt="trusted-brands"
            />
          </div>
         
          <div className="slide">
            <img
              src="https://i.ibb.co/qdMSVv5/total-tools.jpg"
              alt="trusted-brands"
            />
          </div>

          <div className="slide">
            <img
              src="https://i.ibb.co/svKsFSJ/autool-yellow.png"
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
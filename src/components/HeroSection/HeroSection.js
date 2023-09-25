import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../styles/Button';
import heropic from '../../images/hero.jpeg';
import video from '../../images/pexels-aleksey-skatchkov-14514417.mp4';

const HeroSection = ({ myData }) => {

    const { name } = myData;

    return (
        <Wrapper>
            <div className='video-container'>
              <video autoPlay loop muted src={video} className='video'></video>                
              <div className='dark-overlay'></div>
              <div style={{position:'absolute', width:"100%", height: "100%", display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div className='container'>
                <div className='grid grid-two-column'>
                    <div className='hero-section-data'>
                        <p className='intro-data'>Welcome to</p>
                        <h1> {name} </h1>
                        <p className=''>Al Habib is a family business of machinery, equipment and tools since 1960. it is supporting the growth of Bangladesh by stocking high quality capital machineries for all sectors including automobile, garments, construction agricultural etc.</p>

                        <NavLink>
                            <Button>

                              <NavLink  to="/products">
                              Explore Products
                              </NavLink>
                            </Button>
                        </NavLink>

                    </div>

                    {/* <div className='hero-section-image'>
                        <figure>
                            <img className='img-style' src={heropic} alt="al habib hero" />
                        </figure>
                    </div> */}

                </div>
            </div>

              </div>
            </div>
           
        </Wrapper>
    );


};

const Wrapper = styled.section`
  padding: 10rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .video-container {
    position: relative;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh; 
    overflow: hidden;
  }

  .video{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  .dark-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 60%;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      color: white;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: white;
      font-size: 10rem;
    }

    .intro-data {
      
      margin-bottom: 0;
    }
  }

  .intro-description{

  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  figure {
    position: relative;
    

    &::after {
      content: "";
      width: 60%;
      height: 100%;
      background-color: rgba(81, 56, 238, 0.8);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
    z-index: 2;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
  .hero-section-data{
    h1{
      font-size: 5rem;
    }
  }

    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
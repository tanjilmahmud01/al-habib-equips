import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube, FaAddressCard, FaPhoneAlt, FaClock } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import logo from '../../images/al-habib-logo.png';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3 style={{color:"white"}}>Ready to get started?</h3>
              <h3 style={{color:"white"}}>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
            <h3>About</h3>
            <img src={logo} alt="al habib logo" />
              <h3 style={{marginBottom:"2rem", marginTop:"2rem"}}>Al Habib</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, placeat? Provident at dolore nesciunt qui?</p>
              <div className="adress">
              <FaAddressCard style={{fontSize:"30px", color:"black"}} className="icons" />
              
              <p>65 Nawabpur Road, Dhaka</p>
              </div>
              <div className="adress">
              <FaPhoneAlt style={{fontSize:"30px", color:"black"}} className="icons" />
              
              <p>017111111111</p>
              <p>017222222222</p>
              </div>
              <div className="adress">
              <FaAddressCard style={{fontSize:"30px", color:"black"}} className="icons" />
              
              <p>65 Nawabpur Road, Dhaka</p>
              </div>
              <div className="adress">
              <TbSend style={{fontSize:"30px", color:"black"}} className="icons" />
              
              <p>alhabib@gmail.com</p>
              </div>
              <div className="adress">
              <FaClock style={{fontSize:"30px", color:"black"}} className="icons" />
              
              <p>9 AM to 5 PM</p>
              </div>
             
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div className="icons-hover">
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com"
                    >
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+88 0171111111</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Quanta Bangladesh. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color:  #3B0D45;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color:  #3B0D45;
    background-image: url("https://i.ibb.co/fq7HH1t/set-background-image-flutter-hero.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
}


    h3 {
      color: #000;
      margin-bottom: 2.4rem;
    }
    p {
      color: #000;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        

        .icons {
          color: #EE3A21;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
        .icons:hover{
            background-color: #EE3A21;
            color: #FFFFFF
        }
      }
      div: hover{
        background-color: #EE3A21;
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  .adress{
    margin-top: 4rem;
    
    display: flex;
    align-items: center;
    justift-contet: space-between;
    gap: 1.2rem;

    p{
        color:black;
    }
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
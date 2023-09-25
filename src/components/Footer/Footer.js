import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube, FaAddressCard, FaPhoneAlt, FaClock, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import logo from '../../images/al-habib-logo.png';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div style={{position:'relative'}}>
          <div className="grid grid-two-column">
            <div>
              <h3 style={{color:"white"}}>Ready to get started?</h3>
              <h3 style={{color:"white"}}>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/products"> Get Started </NavLink>
              </Button>
            </div>
          </div>
          </div>
     
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
            <h3>About</h3>
            <img src={logo} alt="al habib logo" />
              <h2 style={{marginBottom:"2rem", marginTop:"2rem", color:'white', fontWeight:'bolder'}}>AL-HABIB</h2>
              <p>Al Habib is one of the leading suppliers, wholesaler, retailer and after sales service provider of Industrial Equipments in Bangladesh.</p>
              <div className="footer-icon">
              <FaAddressCard style={{fontSize:"30px", color:"rgb(98, 84, 243)"}} className="icons" />
              
              <p>65 Nawabpur Road, Dhaka</p>
              </div>
              <div className="footer-icon">
              <FaPhoneAlt style={{fontSize:"30px", color:"rgb(98, 84, 243)"}} className="icons" />
              
              <p>+8801886795120</p>
              {/* <p>017222222222</p> */}
              </div>
              {/* <div className="adress">
              <FaAddressCard style={{fontSize:"30px", color:"rgb(98, 84, 243)"}} className="icons" />
              
              <p>65 Nawabpur Road, Dhaka</p>
              </div> */}
              <div className="footer-icon">
              <TbSend style={{fontSize:"30px", color:"rgb(98, 84, 243)"}} className="icons" />
              
              <p>alhabib.equipments@gmail.com</p>
              </div>
              <div className="footer-icon">
              <FaClock style={{fontSize:"30px", color:"rgb(98, 84, 243)"}} className="icons" />
              
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
              <h3>Connect With Us On</h3>
              <div className="footer-social--icons">
                <div className="icons-hover">
                <a
                    href="http://m.me/alhabibequips"
                    >
                    <FaFacebookMessenger className="icons" />
                  </a>
                </div>
                {/* <div>
                  <FaInstagram className="icons" />
                </div> */}
                <div>
                  <a
                    href="http://wa.me/+8801886795120"
                    >
                    <FaWhatsapp className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+8801886795120</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
               &copy; {new Date().getFullYear()} Quanta Bangladesh. All Rights Reserved
              </p>
              <div style={{display:"flex", gap:'5rem'}}>
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
    background-image: url("https://i.ibb.co/KjnRstX/Whats-App-Image-2023-08-28-at-1-21-28-AM.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
}


    h3 {
      color: #FFF;
      margin-bottom: 2.4rem;
    }
    p {
      color: #FFF;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        background-color: black;

        .icons {
          color: white;
          
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
        .icons:hover{
            background-color: rgb(98, 84, 243);;
            color: #FFFFFF
        }
      }
      div: hover{
        background-color: rgb(98, 84, 243);;
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

  .footer-icon{
    margin-top: 4rem;
    
    display: flex;
    align-items: center;
    justift-contet: space-between;
    gap: 1.2rem;

    p{
      color:#FFF;
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
import React from 'react';
import styled from 'styled-components';



const Contact = () => {

  const localCartData = localStorage.getItem("alhabibCart");
  const cartData = JSON.parse(localCartData);
  console.log(cartData);

  // if any customer wants to send message other than quotation message from add to cart
  let isQuote = true;
  if(cartData.length === 0) {
    isQuote = false;
  }
  
  let productData = cartData.map((product) => `${product.name}===> ${product.amount} pcs`).join('\n\n');

  console.log(productData);
  

  return (
    <Wrapper>

      <h2 className='common-heading'>Contact Us</h2>

      {/* Google Map direction of AL habib 65 Nawabpur Road, Dhaka */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.838617653763!2d90.41138370997557!3d23.71745645158167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ff99f21461%3A0x5161b55c4398fa3a!2s65%20Nawabpur%20Rd%2C%20Dhaka%201100!5e0!3m2!1sen!2sbd!4v1692010688482!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title='Map of Al Habib'>

      </iframe>

      <div className="container">

        <div className="contact-form">
          <h3 className='' style={{ textAlign: "left", marginBottom: "10px" }}>Send Your Queries to us: </h3>
          <form
            action="https://formspree.io/f/xpzgpolv"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              autoComplete="off"
              // required
            />

            <input
              type="tel"
              name="Phone"
              placeholder="Your Mobile Number"
              autoComplete="off"
              pattern="[0-9]{11}"
              title='Please give a valid Bangladeshi Phone Number'
              required
            />
            
            {isQuote
                ?
                <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder={`Your Quote Message`}
                value={`I want a quotation for the following items: \n\n${productData}`}
                ></textarea>
                :
                <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder={`Your Message`}
                
                ></textarea>}
           
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );


};

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 5%;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact;
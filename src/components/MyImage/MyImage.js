import React, { useState } from "react";
import styled from "styled-components";

// url set to an empty string for undefined map error, setting default values in imgs array
//imgs is an array where each image is an object with a default property named url with a default value of ""

const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);

    return (
        <Wrapper>
            <div className="grid grid-four-column">
                {imgs.map((curElm, index) => {
                    return (
                        <figure key={index}>
                            <img
                                src={curElm.url}
                                alt={curElm.filename}
                                className="box-image--style"
                                
                                onClick={() => setMainImage(curElm)}
                            />
                        </figure>
                    );
                })}
            </div>
            {/* 2nd column => the image which is clicked from the 4 images */}

            <div className="main-screen">
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
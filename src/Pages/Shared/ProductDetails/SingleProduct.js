import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useProductContext } from "../../../context/productContext";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";
import MyImage from "../../../components/MyImage/MyImage";
import { Container } from "../../../styles/Container";
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md'
import AddToCart from "../../../components/AddToCart/AddToCart";



const SingleProduct = () => {



  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  // coming from Product, url parameter
  // in the app.js route definition, singleproduct/:id was written which is accessed here by id useParams(), not _id
  const { id } = useParams();
  const API = `https://alhabib-server.vercel.app/singleproduct/${id}`;

  useEffect(() => {
    getSingleProduct(`${API}`);

  }, [])

  const {
    _id: alias,
    category_id,
    category,
    name,
    short_description,
    description,
    price,
    image_url,
    details,
    featured,
    stock,
    image

  } = singleProduct;

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }
  
  // array of technical specifications data, it is a list of bulletpoint items 
  const technical_list = description?.technical_specifications;
  const list_itmes = technical_list?.map((listItem, index) =>
    <li style={{ listStyle: "square", marginBottom: "5px", marginLeft: "50px" }} key={index}>{listItem}</li>
  );

  return <Wrapper>
    <PageNavigation title={name} />
    <Container className="container">
        <div className="grid grid-two-column">

        {/* product side Images => 4 images in an array sent to MyImage component*/}
        <div className="product_images">
          <MyImage imgs={image} />
        </div>

        {/* product dAta  */}
        <div className="product-data">
        <h2>{name}</h2>

          {/* <p>{stars}</p> */}
          {/* <p>{reviews} reviews</p> */}
          {/* <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p> */}
          {/* <p className="product-data-price product-data-real-price">
            Deal of the Day: <FormatPrice price={price} />
          </p> */}

          <h3 style={{ color: "#900C3F" }}> <u>Technical Specifications:</u>
          </h3>

          <ul>
            <p>{list_itmes}</p>
          </ul>

          <h3> <u style={{ color: "#900C3F" }}>Product Description:</u>  </h3>
          <p>{description?.detailed_description}</p>

          <h3> <u style={{ color: "#900C3F" }}>Warranty Information::</u>  </h3>
          <p>{description?.warranty_info}</p>

          <p> <strong>Weight: </strong>{description?.weight}</p>


          {/* speciality and services icons, can be changed to other icons according to the need */}
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Delivery in whole Bangladesh</p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Years Warranty </p>
            </div>
          </div>


          {/* product stock checking */}
          <div className="product-data-info">
            <p>
            Availability:
              <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>
            <p>
              Product ID: <span> {alias} </span>
            </p>


            {/* <p>
              Brand :<span> {company} </span>
            </p> */}

            <hr />

            {/* if stock is available, add the product in cart */}
            {stock > 0 && <AddToCart product={singleProduct} />}

          </div>
        </div>
      </div>
    </Container>
  </Wrapper>
}


const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors?.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media?.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

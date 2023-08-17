import React from "react";
import { NavLink } from "react-router-dom";


const Product = (curElem) => {
    const { _id, name, image_url, price, category } = curElem;
    console.log(name);

    return (
        <NavLink to={`/singleproduct/${_id}`}>
            <div className="card">
                <figure>
                    <img src={image_url} alt="" />
                    {/* <figcaption className="caption">{category}</figcaption> */}
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">{price} BDT</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Product;
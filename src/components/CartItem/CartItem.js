import React from 'react';
import { useCartContext } from '../../context/cart_context';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { FaTrash } from "react-icons/fa";



const CartItem = ({ _id, name, image, price, amount, stock }) => {

    // console.log("testing destructuring", _id);
    const { removeItem, setDecrease, setIncrease } = useCartContext();
    

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={_id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    {/* <div className="color-div">
                        <p>color:</p>
                        <div
                            className="color-style"
                            style={{ backgroundColor: color, color: color }}></div>
                    </div> */}
                </div>
            </div>
            {/* price   */}
            <div className="cart-hide">
                <p>
                    {/* <FormatPrice /> */}
                    {price}
                </p>
            </div>

            {/* Quantity  */}
            <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(_id)}
                setIncrease={() => setIncrease(_id)}
            />

            {/* //Subtotal */}
            {/* <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div> */}

            <div>
                {/* {console.log("testing destructuring again", _id)}; */}
                <FaTrash className="remove_icon" onClick={() => removeItem(_id)} />
            </div>
        </div>
    );
};

export default CartItem;
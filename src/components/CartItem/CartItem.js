import React from 'react';
import { useCartContext } from '../../context/cart_context';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { FaTrash } from "react-icons/fa";



const CartItem = ({ _id, name, image, price, amount, stock }) => {

    console.log("testing destructuring", _id);
    const { removeItem } = useCartContext();
    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };



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
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            {/* //Subtotal */}
            {/* <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div> */}

            <div>
                {console.log("testing destructuring again", _id)};
                <FaTrash className="remove_icon" onClick={() => removeItem(_id)} />
            </div>
        </div>
    );
};

export default CartItem;
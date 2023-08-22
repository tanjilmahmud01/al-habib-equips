import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducer/cartReducer/cartReducer';


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("alhabibCart");
    // if(localCartData === []){
    //     return [];
    // }

    const parsedData = JSON.parse(localCartData);

    if(!Array.isArray(parsedData)) return [];

    else{
        return parsedData ;
    }
}

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 5000
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (_id, amount, product) => {
        // console.log(_id, amount, product);
        dispatch({ type: "ADD_TO_CART", payload: { _id, amount, product } })

    }

    const removeItem = (_id) => {
        console.log("testing removing ID", _id);
        dispatch({ type: "REMOVE_ITEM", payload: _id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
      };
    

    useEffect(() => {
        localStorage.setItem("alhabibCart", JSON.stringify(state.cart));
    },[state.cart]);

    

    console.log("state: ", state);

    return (<CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>

        {children}
    </CartContext.Provider>
    );
};

//custom hook
const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };
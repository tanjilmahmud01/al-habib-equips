import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducer/cartReducer/cartReducer';


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("alhabibCart");
    // if(localCartData === []){
    //     return [];
    // }

    const parsedData = JSON.parse(localCartData);


    //solving the localstorage problem after firebase deployment by checking if parsedData is an Array or not
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

    const setDecrease = _id => {
        dispatch({type: "SET_DECREMENT", payload: _id})
    };
    const setIncrease = _id => {
        dispatch({type: "SET_INCREMENT", payload: _id})
    };

    const removeItem = (_id) => {
        console.log("testing removing ID", _id);
        dispatch({ type: "REMOVE_ITEM", payload: _id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
      };
    

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        localStorage.setItem("alhabibCart", JSON.stringify(state.cart));
    },[state.cart]);

    

    console.log("state: ", state);

    return (<CartContext.Provider value={{ 
            ...state,
            addToCart,
            removeItem,
            clearCart,
            setDecrease,
            setIncrease,
        
        }}>

        {children}
    </CartContext.Provider>
    );
};

//custom hook
const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };
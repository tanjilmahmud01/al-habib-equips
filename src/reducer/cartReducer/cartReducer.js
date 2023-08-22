

const cartReducer = (state, action) => {
    // console.log("action payload", action.payload);
    if (action.type === "ADD_TO_CART") {

        let { _id, amount, product } = action.payload;
        // console.log(_id, amount, product);


        let cartProduct;

        cartProduct = {
            _id: _id,
            name: product?.name,
            amount,
            image: product?.image[0].url,
            price: product?.price,
            max: product?.stock,
        };

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }

    if (action.type === "REMOVE_ITEM") {
        console.log("action payload", action.payload);
        let updatedCart = state.cart.filter(
            
            (curItem) =>  curItem._id !== action.payload
        );
        console.log("updatedCart:",updatedCart);
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
          ...state,
          cart: [],
        };
      }



    return state;
};

export default cartReducer;
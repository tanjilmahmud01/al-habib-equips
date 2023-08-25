
const cartReducer = (state, action) => {
    // console.log("action payload", action.payload);

// adding an item in the cart
    if (action.type === "ADD_TO_CART") {

        let { _id, amount, product } = action.payload;
        // console.log(_id, amount, product);

        //checking if same product has been added to cart
        let existingProduct = state.cart.find(currItem => currItem._id === _id);

        if(existingProduct){
            let updatedProduct = state.cart.map(currElem => {
                if(currElem._id === _id){
                    let newAmount = currElem.amount + amount;
                    
                    // add to cart can't be more than max stock
                    if(newAmount >= currElem.max){
                        newAmount = currElem.max
                    }
                    
                    //returning an object with whatever current element is and new amount
                    return{
                        ...currElem,
                        amount: newAmount,
                    };
                }
                else{
                    return currElem;
                }
            });

            return{
                ...state,
                cart: updatedProduct,
            };
        }

        else{
        let cartProduct;

        cartProduct = {
            _id: _id,
            name: product?.name,
            amount,
            image: product?.image[0].url,
            price: product?.price,
            max: product?.stock,
        };

        //add cartProduct with existing state.cart
        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }
    }


// to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem._id === action.payload) {
        let decAmount = curElem.amount - 1;

        //can't go to negative value after 1
        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem._id === action.payload) {
        let incAmount = curElem.amount + 1;

        //can't add any more than max stock
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }



// removing an item from the cart by using remove icon
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
// clearing all the items from the cart
    if (action.type === "CLEAR_CART") {
        return {
          ...state,
          cart: [],
        };
      }
if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }


    return state;
};

export default cartReducer;
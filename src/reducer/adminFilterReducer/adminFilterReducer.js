const adminFilterReducer = (state, action) => {
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            console.log("in the adminFilterReducer to check",action.payload);
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload],
            };

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
      
            return {
                ...state,
                filters: {
                ...state.filters,
                [name]: value,
                },
            };
        
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];
          
            const { text, category} = state.filters;
          
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text);
                });
            }
          
            if (category !== 'all') {
                tempFilterProduct = tempFilterProduct.filter(
                (curElem) => {
                    return curElem.category === category;
                    }
                );
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            };



            default:
            return state;
    }
};

export default adminFilterReducer;
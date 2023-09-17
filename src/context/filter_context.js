import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducer/filterReducer/filterReducer';


const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view: false,
    sorting_value: "lowest",
    filters: {
        text : "",
        category: "all",
        company: "all",
    }
}

export const FilterContextProvider = ({children}) =>{


    const {products} = useProductContext();
    console.log("products",products);

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"});
    }

      // to set the list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    // sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

      // to sort the product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value, state.filters]);
    
     // update the filter values
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

    // whenever products change, this useEffect will load the products in state
    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS",payload: products});
        
    },[products])

    console.log("inside filter context",state);

    return(
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue}}>
            {children}
        </FilterContext.Provider>
        );
        
}


export const useFilterContext = () => {
    return useContext(FilterContext);
}





import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducer/adminFilterReducer/adminFilterReducer';

const AdminFilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],    
    filters: {
        text : "",
        category: "all",
        
    }
}

export const AdminFilterContextProvider = ({children}) => {

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        
    }, [products, state.filters]);

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS",payload: products});
        
    },[products])

    return(
        <AdminFilterContext.Provider value={{...state,updateFilterValue}}>
            {children}
        </AdminFilterContext.Provider>
    )

}

export const useAdminFilterContext = () => {
    return useContext(AdminFilterContext);
}
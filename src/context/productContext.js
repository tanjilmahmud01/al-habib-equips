import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer/productReducer";

const AppContext = createContext();

const API = "https://alhabib-server.vercel.app/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //api call for all featured products

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            //console.log(products);
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    //api call for a single product

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            //console.log(singleProduct);
            dispatch({ type: "SET_SINGLE_API_DATA", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SINGLE_API_ERROR" });
        }
        finally {
            //console.log(state.singleProduct);
        }
    }



    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
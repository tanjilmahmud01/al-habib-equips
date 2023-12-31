import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productContext";
import { CartProvider } from "./context/cart_context";
import { FilterContextProvider } from "./context/filter_context";
import LoginProvider from "./context/login_context";
import { AdminFilterContextProvider } from "./context/admin_filter_context";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <LoginProvider> 
                    <AdminFilterContextProvider>
                    <App />
                    </AdminFilterContextProvider>
                    
                </LoginProvider>              
            </CartProvider>
        </FilterContextProvider>  
    </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

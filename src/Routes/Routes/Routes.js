import { createBrowserRouter } from "react-router-dom";
import Home from '../../Pages/Shared/Home/Home';
import About from "../../Pages/Shared/About/About";
import Products from "../../Pages/Shared/Products/Products";
import Contact from "../../Pages/Shared/ContactUs/Contact";
import SingleProduct from "../../Pages/Shared/ProductDetails/SingleProduct";
import Cart from "../../Pages/Shared/Cart/Cart";
import Error from "../../Pages/Shared/Error/Error";
import Main from "../../layout/Main/Main";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>

    },
    {
        path: '/about',
        element: <About></About>

    },
    {
        path: '/products',
        element: <Products></Products>

    },
    {
        path: '/contact',
        element: <Contact></Contact>

    },
    {
        path: '/singleproduct/:id',
        element: <SingleProduct></SingleProduct>

    },
    {
        path: '/cart',
        element: <Cart></Cart>

    },
    {
        path: '*',
        element: <Error></Error>
    }
])
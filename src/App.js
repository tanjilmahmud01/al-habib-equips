import React from "react";
import { RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Home from "./Pages/Shared/Home/Home";
import About from "./Pages/Shared/About/About";
import Products from "./Pages/Shared/Products/Products";
import Contact from "./Pages/Shared/ContactUs/Contact";
import SingleProduct from "./Pages/Shared/ProductDetails/SingleProduct";
import Error from "./Pages/Shared/Error/Error";
import Cart from "./Pages/Shared/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {

  //Theme context and GlobalStyle CSS will be available througout the routes
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#FFF",
      footer_bg: "0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (

    <ThemeProvider theme={theme}>

      {/* routes */}
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* here we have used useParams() in SingleProduct component, the params variable is called id, instead of _id here */}
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
          <PrivateRoute>  <AdminDashboard/></PrivateRoute>
        } />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Error />} />

        </Routes>
        <Footer/>
      </Router>

    </ThemeProvider>


  );
};

export default App;

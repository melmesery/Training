import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Copyrights from "./components/Copyrights";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Basketball from "./Pages/Basketball";
import Cart from "./Pages/Cart";
import FieldHockey from "./Pages/FieldHockey";
import Handball from "./Pages/Handball";
import Home from "./Pages/Home/Home";
import Korfball from "./Pages/Korfball";
import Login from "./Pages/Login";
import Padel from "./Pages/Padel";
import ProductDetails from "./Pages/ProductDetails";
import Running from "./Pages/Running";
import SignUp from "./Pages/SignUp";
import Tennis from "./Pages/Tennis";
import Vollyball from "./Pages/Vollyball";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/field-hockey" element={<FieldHockey />} />
        <Route path="/handball" element={<Handball />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/korfball" element={<Korfball />} />
        <Route path="/padel" element={<Padel />} />
        <Route path="/running" element={<Running />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/vollyball" element={<Vollyball />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Features />
      <Footer />
      <Copyrights />
    </Fragment>
  );
}

export default App;

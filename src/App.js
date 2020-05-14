import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";
import Cart from "./pages/CartPage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* navbar, sidebar, cart , footer */}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Products" component={Products} />
        <Route path="/Products/:id" exact component={SingleProduct} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

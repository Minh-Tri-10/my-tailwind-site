import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Services from "./components/Services";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <Navbar setOpenCart={setOpenCart} />
      {openCart && <Cart setOpenCart={setOpenCart} />}
      <Home />
      <Services />
      <Product />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

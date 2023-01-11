import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./layout/header";

const Routing = () => {
  return (
    <>
      <div className="routing">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/About" element={<h2>About</h2>}></Route>
              <Route path="/Product" element={<h1>Product</h1>}></Route>
              <Route path="/Contact" element={<h1>Contact</h1>}></Route>
              <Route path="*" element={<h1>Page not Found</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Routing;

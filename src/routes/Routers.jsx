import React from "react";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Contact from "../Pages/Contact";
import Busses from "../Pages/Busses/Busses";
import BussesDetails from "../Pages/Busses/BussesDetails";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/busses" element={<Busses />} />
      <Route path="/s/:id" element={<BussesDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;

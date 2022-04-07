import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import PageLogin from "../pages/login";


function routes() {
  return(
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/login" element={<PageLogin />}/>        
    </Routes>
  )
}

export default routes;
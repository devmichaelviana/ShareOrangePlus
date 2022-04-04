import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import PageLogin from "../pages/login";
import Page2 from "../pages/tela2";


function routes() {
  return(
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/login" element={<PageLogin />}/>
      <Route  path="/tela" element={<Page2/>}/>        
    </Routes>
  )
}

export default routes;
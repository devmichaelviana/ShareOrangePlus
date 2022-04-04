import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Page1 from "../pages/tela1";
import Page2 from "../pages/tela2";
import Login from "../pages/login";

function routes() {
  return(
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/create" element={<Page1 />}/>
      <Route  path="/tela" element={<Page2/>}/>
      <Route  path="/login" element={<Login/>}/>      
    </Routes>
  )
}

export default routes;
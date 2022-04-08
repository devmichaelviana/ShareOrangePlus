import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login.js";
import Home from "../pages/home/home.js";


function routes() {
  return(
    <>
    <Routes>
      <Route  path="/" element={<Home />}/>    
      <Route  path="/login" element={<Login />}/>
    </Routes>
    </>
  )
}

export default routes;
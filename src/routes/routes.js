import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageLogin from "../pages/Logint";
import PageCadastro from "../pages/Cadastro";


function routes() {
  return(
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/login" element={<PageLogin />}/>
      <Route  path="/cadastro" element={<PageCadastro/>}/>        
    </Routes>
  )
}

export default routes;
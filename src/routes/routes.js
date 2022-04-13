import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageLogin from '../pages/Logint';
import PageCadastro from '../pages/Cadastro';
import Tela from '../pages/tela1/index.js';

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/cadastro" element={<PageCadastro />} />
      <Route path="/perfil" element={<Tela />} />
    </Routes>
  );
}

export default routes;

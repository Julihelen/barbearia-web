import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Agendamento from "../views/client/formAgendamento";
import CadastroCliente from "../views/client/cadastroCliente";
import CadastroBarbeiro from "../views/admin/cadastroBarbeiro";
import ClienteLogin from "../views/client/clienteLogin";
import ConsultaServicos from "../views/servicos/ConsultaServicos";
import Avaliacao from "../views/client/formAvaliacao"
import Agendamentos from "../views/admin/agendamentos"
import CadastroServicos from "../views/admin/cadastroServicos"




function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cadastroCliente" element={<CadastroCliente />} />
      <Route path="formAgendamento" element={<Agendamento />} />
      <Route path="formBarbeiro" element={<CadastroBarbeiro />} />
      <Route path="ClienteLogin" element={<ClienteLogin />} />
      <Route path="consultarServicos" element={<ConsultaServicos />} />
      <Route path="formAvaliacao" element={<Avaliacao />} />
      <Route path="agendamentos" element={<Agendamentos />} />
      <Route path="CadastroServicos" element={<CadastroServicos />} />


      
    </Routes>
  );
}

export default Rotas;

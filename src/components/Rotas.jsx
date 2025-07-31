import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Agendamento from "../views/client/formAgendamento";
import CadastroCliente from "../views/client/cadastroCliente";
import CadastroBarbeiro from "../views/admin/cadastroBarbeiro";
import ClienteLogin from "../views/client/clienteLogin";
import ConsultaServicos from "../views/servicos/ConsultaServicos";
import ListarCliente from "../views/admin/listarClientes";
import Avaliacao from "../views/client/formAvaliacao"
import Agendamentos from "../views/admin/agendamentos"
import CadastroServicos from "../views/admin/cadastroServicos"
import Dashboard from "../views/admin/dashboard";
import Sobre from "./Sobre";
import Barbeiros from '../views/admin/listarBarbeiros';
import { Panel } from '../components/teste/Panel';
import FormLogin from '../views/login/FormLogin';
import { ProtectedRoute } from '../views/util/ProtectedRoute';


function Rotas() {
  return (
    <Routes>

      {/* <Route path="/" element={ <FormLogin/> } /> */}

      {/* <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>

      } /> */}
      <Route path="/" element={ <Home/> } /> 


      <Route path="cadastroCliente" element={<CadastroCliente />} />
      <Route path="formAgendamento" element={<Agendamento />} />
      <Route path="cadastroBarbeiro" element={<CadastroBarbeiro />} />
      <Route path="ClienteLogin" element={<ClienteLogin />} />
      <Route path="consultarServicos" element={<ConsultaServicos />} />
      <Route path="formAvaliacao" element={<Avaliacao />} />
      <Route path="agendamentos" element={<Agendamentos />} />
      <Route path="CadastroServicos" element={<CadastroServicos />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Sobre" element={<Sobre />} />
      <Route path="listarBarbeiros" element={<Barbeiros />} />
      <Route path="Panel" element={<Panel />} />
      <Route path="listarClientes" element={<ListarCliente />} />
    </Routes>
  );
}

export default Rotas;

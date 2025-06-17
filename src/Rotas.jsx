import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import FormAgendamento from './views/client/FormAgendamento';
import CadastroCliente from './views/client/CadastroCliente';
import CadastroBarbeiro from './views/admin/CadastroBarbeiro';
import ClienteLogin from './views/client/ClienteLogin';
import ConsultaServicos from './views/servicos/ConsultaServicos';
import MenuSistema from './MenuSistema';
import FooterSistema from './FooterSistema';

function Rotas() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="form-cliente" element={<CadastroCliente />} />
            <Route path="form-agendamento" element={<FormAgendamento />} />
            <Route path="form-barbeiro" element={<CadastroBarbeiro />} />
            <Route path="login-cliente/" element={<ClienteLogin />} />
            <Route path="consultar-servicos" element={<ConsultaServicos />} />
        
        </Routes>

    )
}

export default Rotas;

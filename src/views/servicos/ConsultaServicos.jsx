import React from 'react';
import { Card, Header } from 'semantic-ui-react';
import MenuSistema from '../../components/Menu';

const servicos = [
    { id: 1, nome: 'Corte de Cabelo', descricao: 'Corte clássico', preco: 'R$ 40,00' },
    { id: 2, nome: 'Barba', descricao: 'Modelagem e hidratação', preco: 'R$ 25,00' },
    { id: 3, nome: 'Corte + Barba', descricao: 'Combo completo', preco: 'R$ 60,00' },
    { id: 5, nome: 'Hidratação Capilar', descricao: 'Tratamento para cabelos secos', preco: 'R$ 50,00' },
    { id: 7, nome: 'Sobrancelha', descricao: 'Técnicas de epilação rápida e eficaz', preco: 'R$ 35,00' },
];


function ConsultaServicos() {
    return (
        <>
        <MenuSistema tela="Consultar serviços" />
        <div style={{ paddingTop: '80px' }}>
            <Header as="h2" dividing> Nossos serviços </Header>
            <div className="ui cards">
                {servicos.map(servico => (
                    <div className="card" key={servico.id}>
                        <div className="content">
                            <div className="header">{servico.nome}</div>
                            <div className="description">
                                {servico.descricao}
                            </div>
                        </div>
                        <div className="ui bottom attached button">
                            <i className="add shopping cart icon"> </i>
                            {servico.preco}
                        </div>
                    </div>
                ))}
            </div>
        </div></>
    );
}

export default ConsultaServicos;

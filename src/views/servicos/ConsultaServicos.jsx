import React, { useEffect, useState } from "react";
import { Header, Card, Button, Icon } from 'semantic-ui-react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import axios from "axios";

const servicos = [
    { id: 1, nome: 'Corte de Cabelo', descricao: 'Corte clássico', preco: 'R$ 40,00' },
    { id: 2, nome: 'Barba', descricao: 'Modelagem e hidratação', preco: 'R$ 25,00' },
    { id: 3, nome: 'Corte + Barba', descricao: 'Combo completo', preco: 'R$ 60,00' },
    { id: 5, nome: 'Hidratação Capilar', descricao: 'Tratamento para cabelos secos', preco: 'R$ 50,00' },
    { id: 7, nome: 'Sobrancelha', descricao: 'Técnicas de epilação rápida e eficaz', preco: 'R$ 35,00' },

    ,
];

export default function ListServicos () {
    const [servicos, setServicos] = useState([]);
    useEffect(() => {
        carregarServicos();
   }, [])

   function carregarServicos() {

        axios.get("http://localhost:8080/api/servicos")
        .then((response) => {
           setServicos(response.data)
        })
    }

    return (
        <>
            <Menu tela="Consultar serviços" />
            <div className="container-servicos">
                <Header as="h2" dividing style={{ color: '#bb872e', fontFamily: 'Palatino, Palatino Linotype, Book Antiqua, serif' }}>
                    Nossos serviços
                </Header>
                <Card.Group centered>
                    {servicos.map(servico => (
                        <Card key={servico.id}>
                            <Card.Content>
                                <Card.Header>{servico.titulo}</Card.Header>
                                <Card.Description>{servico.descricao}</Card.Description>
                            </Card.Content>
                            <Button attached="bottom">
                                <Icon name="add shopping cart" />
                                {servico.preco}
                            </Button>
                        </Card>
                    ))}
                </Card.Group>
            </div>
            <Footer />
        </>
    );
}



import React, { useEffect, useState } from "react";
import { Header, Card, Button, Icon } from 'semantic-ui-react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import axios from "axios";

export default function ListServicos () {
    const [servicos, setServicos] = useState([]);
    useEffect(() => {
        carregarServicos();
   }, [])

   function carregarServicos() {
    axios.get("http://localhost:8080/api/servicos")
        .then((response) => {
            console.log(response.data); // veja o que aparece aqui
            setServicos(response.data); // ou response.data.content
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



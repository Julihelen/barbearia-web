import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuAdmin from "../../components/MenuAdmin";
import TopMenu from '../../components/TopMenu';

export default function ListBarbeiro() {
    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {
        axios.get("http://localhost:8080/api/barbeiros")
            .then((response) => {
                setLista(response.data);
            })
            .catch(() => {
                console.error('Erro ao carregar barbeiros');
            });
    }

    function confirmaRemover(id) {
        setOpenModal(true);
        setIdRemover(id);
    }

    async function remover() {
        try {
            await axios.delete(`http://localhost:8080/api/barbeiros/${idRemover}`);
            carregarLista();
        } catch (error) {
            console.error('Erro ao remover barbeiro');
        }
        setOpenModal(false);
    }

    return (
        <div>
            <TopMenu />
            <MenuAdmin tela={'listarBarbeiros'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <h2> Barbeiros </h2>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='brown'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-barbeiro'
                        />

                        <Table color='orange' sortable celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>Telefone</Table.HeaderCell>
                                    <Table.HeaderCell>Horário Início</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {lista.map(barbeiro => (
                                    <Table.Row key={barbeiro.id}>
                                        <Table.Cell>{barbeiro.nome}</Table.Cell>
                                        <Table.Cell>{barbeiro.telefone}</Table.Cell>
                                        <Table.Cell>{barbeiro.atendimentoInicio}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Editar barbeiro'
                                                icon>
                                                <Link to="/form-barbeiro" state={{ id: barbeiro.id }} style={{ color: 'green' }}>
                                                    <Icon name='edit' />
                                                </Link>
                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Remover barbeiro'
                                                icon
                                                onClick={() => confirmaRemover(barbeiro.id)}>
                                                <Icon name='trash' />
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse barbeiro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table, Form } from 'semantic-ui-react';
import TopMenu from '../../components/TopMenu';
import MenuAdmin from '../../components/MenuAdmin';
import api from '../util/Api'; //  importa sua instância configurada de axios

export default function ListarCliente() {
    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false); // Modal de exclusão
    const [idRemover, setIdRemover] = useState();

    const [openEditModal, setOpenEditModal] = useState(false); // Modal de edição
    const [clienteEditando, setClienteEditando] = useState(null);

    // Campos do formulário de edição
    const [nomeEdit, setNomeEdit] = useState("");
    const [emailEdit, setEmailEdit] = useState("");
    const [foneEdit, setFoneEdit] = useState("");
    const [cpfEdit, setCpfEdit] = useState("");

    useEffect(() => {
        carregarLista();
    }, []);

    function carregarLista() {
        api.get("/cliente")
            .then(response => setLista(response.data))
            .catch(error => console.error("Erro ao buscar clientes:", error));
    }

    // Modal de exclusão
    function confirmaRemover(id) {
        setOpenModal(true);
        setIdRemover(id);
    }

    async function remover() {
        try {
            await api.delete(`/cliente/${idRemover}`);
            carregarLista();
        } catch (error) {
            console.error('Erro ao remover cliente:', error);
        }
        setOpenModal(false);
    }

    // Modal de edição
    const abrirEditar = (cliente) => {
        setClienteEditando(cliente);
        setNomeEdit(cliente.nome || "");
        setEmailEdit(cliente.email || "");
        setFoneEdit(cliente.foneCelular || "");
        setCpfEdit(cliente.cpf || "");
        setOpenEditModal(true);
    };

    const salvarEdicao = async () => {
        const payload = {
            ...clienteEditando,
            nome: nomeEdit,
            email: emailEdit,
            foneCelular: foneEdit,
            cpf: cpfEdit
        };

        try {
            await api.put(`/cliente/${clienteEditando.id}`, payload);
            carregarLista();
            setOpenEditModal(false);
        } catch (error) {
            console.error("Erro ao salvar edição:", error.response || error);
        }
    };

    return (
        <div>
            <TopMenu />
            <MenuAdmin tela={'clientes'} />
            <div style={{ marginLeft: '180px', marginTop: '3em', padding: '20px' }}>
                <Container textAlign='justified'>
                    <h2> Clientes </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='user plus'
                            floated='right'
                            as={Link}
                            to='/cadastroCliente'
                        />

                        <br /><br /><br />

                        <Table color='orange' sortable celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>Email</Table.HeaderCell>
                                    <Table.HeaderCell>Telefone</Table.HeaderCell>
                                    <Table.HeaderCell>CPF</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {lista.map((cliente) => (
                                    <Table.Row key={cliente.id}>
                                        <Table.Cell>{cliente.nome}</Table.Cell>
                                        <Table.Cell>{cliente.email}</Table.Cell>
                                        <Table.Cell>{cliente.foneCelular}</Table.Cell>
                                        <Table.Cell>{cliente.cpf}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Editar'
                                                icon
                                                onClick={() => abrirEditar(cliente)}
                                            >
                                                <Icon name='edit' />
                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Remover'
                                                icon
                                                onClick={() => confirmaRemover(cliente.id)}
                                            >
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

            {/* Modal de confirmação para remover */}
            <Modal basic onClose={() => setOpenModal(false)} open={openModal}>
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}>
                        Tem certeza que deseja remover esse cliente?
                    </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={remover}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

            {/* Modal para editar cliente */}
            <Modal open={openEditModal} onClose={() => setOpenEditModal(false)} size="small">
                <Header icon="edit" content="Editar Cliente" />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Nome</label>
                            <input
                                value={nomeEdit}
                                onChange={(e) => setNomeEdit(e.target.value)}
                                placeholder="Nome do cliente"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input
                                type="email"
                                value={emailEdit}
                                onChange={(e) => setEmailEdit(e.target.value)}
                                placeholder="Email"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Telefone</label>
                            <input
                                value={foneEdit}
                                onChange={(e) => setFoneEdit(e.target.value)}
                                placeholder="Telefone"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>CPF</label>
                            <input
                                value={cpfEdit}
                                onChange={(e) => setCpfEdit(e.target.value)}
                                placeholder="CPF"
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setOpenEditModal(false)} basic color="red" inverted>
                        <Icon name="remove" /> Cancelar
                    </Button>
                    <Button onClick={salvarEdicao} color="green" inverted>
                        <Icon name="checkmark" /> Salvar
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
}

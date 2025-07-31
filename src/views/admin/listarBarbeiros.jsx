import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table, Form } from 'semantic-ui-react';
import MenuSistema from "../../components/MenuAdmin";

export default function ListBarbeiro() {
    const [lista, setLista] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState(null);

    const [openEditModal, setOpenEditModal] = useState(false);
    const [barbeiroEditar, setBarbeiroEditar] = useState(null);

    const [nomeEdit, setNomeEdit] = useState("");
    const [foneCelularEdit, setFoneCelularEdit] = useState("");
    const [atendimentoInicioEdit, setAtendimentoInicioEdit] = useState("");
    const [atendimentoFimEdit, setAtendimentoFimEdit] = useState("");
    const [emailEdit, setEmailEdit] = useState("");
    const [enderecoEdit, setEnderecoEdit] = useState("");

    useEffect(() => {
        carregarLista();
    }, []);

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

    function abrirEditar(barbeiro) {
        setBarbeiroEditar(barbeiro);
        setNomeEdit(barbeiro.nome || "");
        setFoneCelularEdit(barbeiro.foneCelular || "");
        setAtendimentoInicioEdit(formatTime(barbeiro.atendimentoInicio));
        setAtendimentoFimEdit(formatTime(barbeiro.atendimentoFim));
        setEmailEdit(barbeiro.email || "");
        setEnderecoEdit(barbeiro.endereco || "");
        setOpenEditModal(true);
    }

    function formatTime(time) {
        if (!time) return "";
        if (typeof time === "string") return time.substring(0, 5);
        if (time instanceof Date) {
            const h = time.getHours().toString().padStart(2, '0');
            const m = time.getMinutes().toString().padStart(2, '0');
            return `${h}:${m}`;
        }
        return "";
    }

    async function salvarEdicao() {
        try {
            const barbeiroAtualizado = {
                ...barbeiroEditar,
                nome: nomeEdit,
                foneCelular: foneCelularEdit,
                atendimentoInicio: atendimentoInicioEdit,
                atendimentoFim: atendimentoFimEdit,
                email: emailEdit,
                endereco: enderecoEdit,
            };

            await axios.put(`http://localhost:8080/api/barbeiros/${barbeiroEditar.id}`, barbeiroAtualizado);

            carregarLista();
            setOpenEditModal(false);
        } catch (error) {
            console.error("Erro ao salvar edição:", error);
            alert("Erro ao salvar edição. Por favor, tente novamente.");
        }
    }

    const styles = {
        container: { marginTop: "3%", marginBottom: "5%" },
        title: { color: "#fff", fontSize: "2rem", textAlign: "center", marginBottom: "1rem" },
        table: { borderRadius: "8px", overflow: "hidden" },
        modalContent: {
            backgroundColor: "#bb872e",
            borderRadius: "8px",
            padding: "20px",
        },
        formLabel: { color: "#0a0803", fontWeight: "bold" },
        input: {
            border: "1px solid #bb872e",
            borderRadius: "5px",
            padding: "10px",
            color: "#0a0803",
            backgroundColor: "#fff",
        },
        buttonSalvar: {
            backgroundColor: "#0a0803",
            color: "#bb872e",
            fontWeight: "bold",
        },
    };

    return (
        <div>
            <MenuSistema tela={'listarBarbeiros'} />

            <Container style={styles.container} textAlign='justified'>
                <h2 style={styles.title}>Barbeiros Cadastrados</h2>
                <Divider />

                <Button
                    label='Novo'
                    circular
                    color='brown'
                    icon='clipboard outline'
                    floated='right'
                    as={Link}
                    to='/cadastroBarbeiro'
                />

                <Table color='orange' celled style={{ ...styles.table, marginTop: '4%' }}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>Telefone</Table.HeaderCell>
                            <Table.HeaderCell>Horário Início</Table.HeaderCell>
                            <Table.HeaderCell>Horário Fim</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Endereço</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {lista.map(barbeiro => (
                            <Table.Row key={barbeiro.id}>
                                <Table.Cell>{barbeiro.nome}</Table.Cell>
                                <Table.Cell>{barbeiro.foneCelular}</Table.Cell>
                                <Table.Cell>{formatTime(barbeiro.atendimentoInicio)}</Table.Cell>
                                <Table.Cell>{formatTime(barbeiro.atendimentoFim)}</Table.Cell>
                                <Table.Cell>{barbeiro.email}</Table.Cell>
                                <Table.Cell>{barbeiro.endereco}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <Button
                                        inverted
                                        circular
                                        color='green'
                                        title='Editar barbeiro'
                                        icon
                                        onClick={() => abrirEditar(barbeiro)}
                                    >
                                        <Icon name='edit' />
                                    </Button>
                                    &nbsp;
                                    <Button
                                        inverted
                                        circular
                                        color='red'
                                        title='Remover barbeiro'
                                        icon
                                        onClick={() => confirmaRemover(barbeiro.id)}
                                    >
                                        <Icon name='trash' />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Container>

            {/* Modal de confirmação para remover */}
            <Modal basic onClose={() => setOpenModal(false)} open={openModal}>
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}>Tem certeza que deseja remover esse barbeiro?</div>
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

            {/* Modal para editar barbeiro */}
            <Modal open={openEditModal} onClose={() => setOpenEditModal(false)} size="small">
            <Header icon="edit" content="Editar Barbeiro" />
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Nome</label>
                        <input
                            type="text"
                            value={nomeEdit}
                            onChange={(e) => setNomeEdit(e.target.value)}
                            placeholder="Nome do barbeiro"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Telefone</label>
                        <input
                            type="text"
                            value={foneCelularEdit}
                            onChange={(e) => setFoneCelularEdit(e.target.value)}
                            placeholder="Telefone"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Horário Início</label>
                        <input
                            type="time"
                            value={atendimentoInicioEdit}
                            onChange={(e) => setAtendimentoInicioEdit(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Horário Fim</label>
                        <input
                            type="time"
                            value={atendimentoFimEdit}
                            onChange={(e) => setAtendimentoFimEdit(e.target.value)}
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
                        <label>Endereço</label>
                        <input
                            type="text"
                            value={enderecoEdit}
                            onChange={(e) => setEnderecoEdit(e.target.value)}
                            placeholder="Endereço"
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

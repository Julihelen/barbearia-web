import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table, Form } from 'semantic-ui-react';
import MenuSistema from "../../components/MenuAdmin";

export default function ListBarbeiro() {
    // Lista de barbeiros carregada da API
    const [lista, setLista] = useState([]);

    // Controle do modal de confirmação para remover barbeiro
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState(null);

    // Controle do modal de edição de barbeiro
    const [openEditModal, setOpenEditModal] = useState(false);
    const [barbeiroEditar, setBarbeiroEditar] = useState(null);

    // Campos para edição no modal (todos os campos que serão editados)
    const [nomeEdit, setNomeEdit] = useState("");
    const [telefoneEdit, setTelefoneEdit] = useState("");
    const [atendimentoInicioEdit, setAtendimentoInicioEdit] = useState("");
    const [atendimentoFimEdit, setAtendimentoFimEdit] = useState("");
    const [emailEdit, setEmailEdit] = useState("");
    const [enderecoEdit, setEnderecoEdit] = useState("");

    // Carregar a lista de barbeiros ao montar o componente
    useEffect(() => {
        carregarLista();
    }, []);

    // Função que faz requisição para buscar barbeiros no backend
    function carregarLista() {
        axios.get("http://localhost:8080/api/barbeiros")
            .then((response) => {
                setLista(response.data);
            })
            .catch(() => {
                console.error('Erro ao carregar barbeiros');
            });
    }

    // Abre modal de confirmação para remover barbeiro
    function confirmaRemover(id) {
        setOpenModal(true);
        setIdRemover(id);
    }

    // Executa a remoção via API e atualiza lista
    async function remover() {
        try {
            await axios.delete(`http://localhost:8080/api/barbeiros/${idRemover}`);
            carregarLista();
        } catch (error) {
            console.error('Erro ao remover barbeiro');
        }
        setOpenModal(false);
    }

    // Abre modal de edição e preenche campos com os dados do barbeiro selecionado
    function abrirEditar(barbeiro) {
        setBarbeiroEditar(barbeiro);
        setNomeEdit(barbeiro.nome || "");
        setTelefoneEdit(barbeiro.telefone || "");
        setAtendimentoInicioEdit(barbeiro.atendimentoInicio || "");
        setAtendimentoFimEdit(barbeiro.atendimentoFim || "");
        setEmailEdit(barbeiro.email || "");
        setEnderecoEdit(barbeiro.endereco || "");
        setOpenEditModal(true);
    }

    // Salva as alterações feitas no barbeiro via API PUT
    async function salvarEdicao() {
        try {
            // Monta o objeto com os dados atualizados
            const barbeiroAtualizado = {
                ...barbeiroEditar,
                nome: nomeEdit,
                telefone: telefoneEdit,
                atendimentoInicio: atendimentoInicioEdit,
                atendimentoFim: atendimentoFimEdit,
                email: emailEdit,
                endereco: enderecoEdit,
            };

            // Envia a requisição PUT para atualizar o barbeiro
            await axios.put(`http://localhost:8080/api/barbeiros/${barbeiroEditar.id}`, barbeiroAtualizado);

            // Recarrega lista para atualizar tabela e fecha modal
            carregarLista();
            setOpenEditModal(false);
        } catch (error) {
            console.error("Erro ao salvar edição:", error);
            alert("Erro ao salvar edição. Por favor, tente novamente.");
        }
    }

    return (
        <div>
            <MenuSistema tela={'listarBarbeiros'} />

            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2>Barbeiros</h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='brown'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/cadastroBarbeiro'
                        />
                        <br></br><br></br><br></br>
                        <Table color='orange' sortable celled>
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
                                        <Table.Cell>{barbeiro.telefone}</Table.Cell>
                                        <Table.Cell>{barbeiro.atendimentoInicio}</Table.Cell>
                                        <Table.Cell>{barbeiro.atendimentoFim}</Table.Cell>
                                        <Table.Cell>{barbeiro.email}</Table.Cell>
                                        <Table.Cell>{barbeiro.endereco}</Table.Cell>
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

            {/* Modal de confirmação para remover barbeiro */}
            <Modal
                basic
                onClose={() => setOpenModal(false)}
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

            {/* Modal para editar barbeiro */}
            <Modal
                open={openEditModal}
                onClose={() => setOpenEditModal(false)}
                size="small"
            >
                <Header icon="edit" content="Editar Barbeiro" />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Nome</label>
                            <input
                                value={nomeEdit}
                                onChange={(e) => setNomeEdit(e.target.value)}
                                placeholder="Nome do barbeiro"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Telefone</label>
                            <input
                                value={telefoneEdit}
                                onChange={(e) => setTelefoneEdit(e.target.value)}
                                placeholder="Telefone"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Horário Início</label>
                            <input
                                type="time"
                                value={atendimentoInicioEdit}
                                onChange={(e) => setAtendimentoInicioEdit(e.target.value)}
                                placeholder="Horário Início"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Horário Fim</label>
                            <input
                                type="time"
                                value={atendimentoFimEdit}
                                onChange={(e) => setAtendimentoFimEdit(e.target.value)}
                                placeholder="Horário Fim"
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
                                value={enderecoEdit}
                                onChange={(e) => setEnderecoEdit(e.target.value)}
                                placeholder="Endereço"
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        onClick={() => setOpenEditModal(false)}
                        basic
                        color="red"
                        inverted
                    >
                        <Icon name="remove" /> Cancelar
                    </Button>
                    <Button
                        onClick={salvarEdicao}
                        color="green"
                        inverted
                    >
                        <Icon name="checkmark" /> Salvar
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
}

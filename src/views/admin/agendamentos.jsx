import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table, Form } from 'semantic-ui-react';
import MenuSistema from '../../components/Menu';

export default function ListAgendamento() {
    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false); // Modal de exclusão
    const [idRemover, setIdRemover] = useState();

    const [openEditModal, setOpenEditModal] = useState(false); // Modal de edição
    const [agendamentoEditando, setAgendamentoEditando] = useState(null);

    // Campos do formulário de edição
    const [dataEdit, setDataEdit] = useState("");
    const [horaEdit, setHoraEdit] = useState("");
    const [observacoesEdit, setObservacoesEdit] = useState("");

    useEffect(() => {
        carregarLista();
    }, []);

    function carregarLista() {
        axios.get("http://localhost:8080/api/agendamento")
            .then((response) => setLista(response.data))
            .catch((error) => console.error("Erro ao buscar agendamentos:", error));
    }

    function formatarData(dataParam) {
        if (!dataParam) return '';
        const [ano, mes, dia] = dataParam.split('-');
        return `${dia}/${mes}/${ano}`;
    }

    function formatarHorario(horario) {
        if (!horario) return '';
        return horario.substring(0, 5);
    }

    // Modal de exclusão
    function confirmaRemover(id) {
        setOpenModal(true);
        setIdRemover(id);
    }

    async function remover() {
        try {
            await axios.delete(`http://localhost:8080/api/agendamento/${idRemover}`);
            carregarLista();
        } catch (error) {
            console.error('Erro ao remover o agendamento:', error);
        }
        setOpenModal(false);
    }

    // Modal de edição
    const abrirEditar = (agendamento) => {
        console.log("Agendamento selecionado para editar:", agendamento);
        setAgendamentoEditando(agendamento);
        setDataEdit(agendamento.dataAtendimento);
        setHoraEdit(agendamento.horario);
        setObservacoesEdit(agendamento.observacoes || "");
        setOpenEditModal(true); // Abre o modal correto
    };

    const salvarEdicao = async () => {
        const payload = {
            id: agendamentoEditando.id, // 🔑 Adiciona o ID no corpo
            servicoId: agendamentoEditando.servico?.id,
            barbeiroId: agendamentoEditando.barbeiro?.id,
            dataAtendimento: dataEdit,
            horario: horaEdit,
            observacoes: observacoesEdit
        };

        try {
            console.log("Payload enviado:", payload);
            await axios.put(`http://localhost:8080/api/agendamento/${agendamentoEditando.id}`, payload);
            carregarLista();
            setOpenEditModal(false);
        } catch (error) {
            console.error("Erro ao salvar edição:", error.response || error);
        }
    };
    return (
        <div>
            <MenuSistema tela={'agendamento'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2> Agendamentos </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='calendar plus'
                            floated='right'
                            as={Link}
                            to='/formAgendamento'
                        />

                        <br /><br /><br />

                        <Table color='orange' sortable celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Cliente</Table.HeaderCell>
                                    <Table.HeaderCell>Serviço</Table.HeaderCell>
                                    <Table.HeaderCell>Data</Table.HeaderCell>
                                    <Table.HeaderCell>Horário</Table.HeaderCell>
                                    <Table.HeaderCell>Barbeiro</Table.HeaderCell>
                                    <Table.HeaderCell>Observações</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {lista.map((agendamento) => (
                                    <Table.Row key={agendamento.id}>
                                        <Table.Cell>{agendamento.nome}</Table.Cell>
                                        <Table.Cell>{agendamento.servico?.titulo || '—'}</Table.Cell>
                                        <Table.Cell>{formatarData(agendamento.dataAtendimento)}</Table.Cell>
                                        <Table.Cell>{formatarHorario(agendamento.horario)}</Table.Cell>
                                        <Table.Cell>{agendamento.barbeiro?.nome || '—'}</Table.Cell>
                                        <Table.Cell>{agendamento.observacoes || '—'}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Editar'
                                                icon
                                                onClick={() => abrirEditar(agendamento)}
                                            >
                                                <Icon name='edit' />
                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Remover'
                                                icon
                                                onClick={() => confirmaRemover(agendamento.id)}
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
                        Tem certeza que deseja remover esse agendamento?
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

            {/* Modal para editar agendamento */}
            <Modal open={openEditModal} onClose={() => setOpenEditModal(false)} size="small">
                <Header icon="edit" content="Editar Agendamento" />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Data</label>
                            <input
                                type="date"
                                value={dataEdit}
                                onChange={(e) => setDataEdit(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Hora</label>
                            <input
                                type="time"
                                value={horaEdit}
                                onChange={(e) => setHoraEdit(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Observações</label>
                            <Form.TextArea
                                value={observacoesEdit}
                                onChange={(e) => setObservacoesEdit(e.target.value)}
                                placeholder="Observações do agendamento"
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

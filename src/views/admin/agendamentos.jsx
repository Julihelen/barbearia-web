import React, { useEffect, useState } from "react";
import { Table, Container, Header, Image } from "semantic-ui-react";
import MenuSistema from "../../components/MenuAdmin";
import axios from "axios";

function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/agendamento")
      .then((response) => {
        setAgendamentos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar agendamentos:", error);
      });
  }, []);

  return (
    <>
      <MenuSistema tela="admin" />
      <Container style={{ marginTop: "4em" }}>
      
        <Header style={{color: "white"}}  as="h2">Painel do Administrador - Agendamentos</Header>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Cliente</Table.HeaderCell>
              <Table.HeaderCell>Serviço</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
              <Table.HeaderCell>Horário</Table.HeaderCell>
              <Table.HeaderCell>Barbeiro</Table.HeaderCell>
              <Table.HeaderCell>Observações</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {agendamentos.map((ag, i) => (
              <Table.Row key={i}>
                <Table.Cell>{ag.nome}</Table.Cell>
                <Table.Cell>{ag.servico}</Table.Cell>
                <Table.Cell>{ag.dataAtendimento}</Table.Cell>
                <Table.Cell>{ag.horario}</Table.Cell>
                <Table.Cell>{ag.barbeiro}</Table.Cell>
                <Table.Cell>{ag.observacoes}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  );
}

export default Agendamentos;






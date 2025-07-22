import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Header,
  Input,
  TextArea,
} from "semantic-ui-react";
import MenuSistema from "../../components/Menu";
import axios from "axios";
import "../home/styles/Home.module.css";

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState(null);
  const [dataAtendimento, setDataAtendimento] = useState("");
  const [horario, setHorario] = useState(null);
  const [barbeiro, setBarbeiro] = useState(null);
  const [observacoes, setObservacoes] = useState("");
  const [fotoBarbeiro, setFotoBarbeiro] = useState(null);

  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [barbeirosOptions, setBarbeirosOptions] = useState([]);
  const [servicosOptions, setServicosOptions] = useState([]);

  // Buscar serviços do backend para popular o dropdown
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/servicos")
      .then((res) => {
        const options = res.data.map((s) => ({
          key: s.id,
          text: s.titulo,
          value: s.id, // antes estava s.titulo
        }));
        setServicosOptions(options);
      })
      .catch((err) => {
        console.error("Erro ao buscar serviços:", err);
        setServicosOptions([]);
      });
  }, []);

  // Buscar barbeiros disponíveis pelo serviço
    useEffect(() => {
      if (!servico) {
        setBarbeirosOptions([]);
        setBarbeiro(null);
        setFotoBarbeiro(null);
        return;
      }

      axios
        .get(`http://localhost:8080/api/barbeiros/por-servico/${servico}`)
        .then((res) => {
          const barbeiros = res.data.map((b) => ({
            key: b.id,
            text: b.nome,
            value: b.id,
            image: {
              avatar: true,
              src: b.foto || "https://via.placeholder.com/150",
            },
          }));
          setBarbeirosOptions(barbeiros);
        })
        .catch((err) => {
          console.error("Erro ao buscar barbeiros:", err);
          setBarbeirosOptions([]);
        });
    }, [servico]);

  // Buscar horários disponíveis do barbeiro selecionado e data
  useEffect(() => {
    if (!barbeiro || !dataAtendimento) {
      setHorariosDisponiveis([]);
      setHorario(null);
      return;
    }

    const diasSemana = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    const diaSemana = diasSemana[new Date(dataAtendimento).getDay()];

    axios
      .get(`http://localhost:8080/api/disponibilidade/${barbeiro}`, {
        params: { diaSemana },
      })
      .then((res) => {
        const opcoes = res.data.map((hora) => ({
          key: hora,
          text: hora,
          value: hora,
        }));
        setHorariosDisponiveis(opcoes);
      })
      .catch((err) => {
        console.error("Erro ao buscar horários:", err);
        setHorariosDisponiveis([]);
      });
  }, [barbeiro, dataAtendimento]);

  // Função para agendar atendimento
  function agendar() {
    if (!barbeiro || !nome || !dataAtendimento || !horario || !servico) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const AgendamentoRequest = {
      nome,
      servico,
      dataAtendimento,
      horario,
      barbeiro,
      observacoes,
    };

    axios
      .post("http://localhost:8080/api/agendamento", AgendamentoRequest)
      .then(() => {
        alert("Agendamento realizado com sucesso!");
        // Limpar formulário se desejar:
        setNome("");
        setServico(null);
        setBarbeiro(null);
        setFotoBarbeiro(null);
        setDataAtendimento("");
        setHorario(null);
        setObservacoes("");
        setBarbeirosOptions([]);
        setHorariosDisponiveis([]);
      })
      .catch((error) => {
        console.error("Erro ao agendar:", error);
        alert("Erro ao realizar agendamento, tente novamente.");
      });
  }

  return (
    <>
      <MenuSistema tela="agendamento" />
      <div className="background-container">
        <Container className="form-agendamento">
          <Header as="h2" className="form-header" style={{ color: "#bb872e" }}>
            Agendamento de serviço 
          </Header>
          <Form>
            <Form.Field>
              <label>Nome:</label>
              <Input
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Field>

            <Form.Field>
              <label>Serviço:</label>
              <Dropdown
                placeholder="Selecione um serviço"
                fluid
                selection
                options={servicosOptions}
                value={servico}
                onChange={(e, data) => setServico(data.value)}
              />
            </Form.Field>

            <Form.Field>
              <label>Barbeiro:</label>
              <Dropdown
                placeholder="Selecione um barbeiro"
                fluid
                selection
                options={barbeirosOptions}
                value={barbeiro}
                onChange={(e, data) => {
                  setBarbeiro(data.value);
                  const selecionado = barbeirosOptions.find(
                    (b) => b.value === data.value
                  );
                  setFotoBarbeiro(selecionado?.image?.src || null);
                }}
                disabled={!servico}
              />
              {fotoBarbeiro && (
                <img
                  src={fotoBarbeiro}
                  alt="Foto do barbeiro"
                  className="foto-barbeiro"
                />
              )}
            </Form.Field>

            <Form.Field>
              <label>Data:</label>
              <Input
                type="date"
                value={dataAtendimento}
                onChange={(e) => setDataAtendimento(e.target.value)}
                disabled={!barbeiro}
              />
            </Form.Field>

            <Form.Field>
              <label>Horário:</label>
              <Dropdown
                placeholder="Selecione um horário"
                fluid
                selection
                options={horariosDisponiveis}
                value={horario}
                onChange={(e, data) => setHorario(data.value)}
                disabled={!dataAtendimento}
              />
            </Form.Field>

            <Form.Field>
              <label>Observações:</label>
              <TextArea
                placeholder="Alguma preferência ou observação?"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
              />
            </Form.Field>

            <Button onClick={agendar} color="green">
              Agendar
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

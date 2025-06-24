import React, { useState } from "react";
import { Form, Button, Grid, Icon, Dropdown } from "semantic-ui-react";
import MenuSistema from "../../components/Menu";
import axios from "axios";

const servicosOptions = [
  { key: "corte", text: "Corte de Cabelo", value: "Corte de Cabelo" },
  { key: "barba", text: "Barba", value: "Barba" },
  { key: "sobrancelha", text: "Sobrancelha", value: "Sobrancelha" },
];

const barbeirosData = [
  {
    key: "joao",
    text: "João",
    value: "João",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    key: "maria",
    text: "Maria",
    value: "Maria",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    key: "carlos",
    text: "Carlos",
    value: "Carlos",
    foto: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

// function logar() {
//   alert("Você será direcionado para página de login");
//   window.location.href = "/login-cliente";
// }

// function cadastrar() {
//   alert("Você será direcionado para página de cadastro");
//   window.location.href = "/form-cliente";
// }

function Agendamento() {
  const [nome, setNome] = useState();
  const [servico, setServico] = useState();
  const [dataAtendimento, setDataAtendimento] = useState();
  const [horario, setHorario] = useState();
  const [barbeiro, setBarbeiro] = useState();
  const [observacoes, setObservacoes] = useState();
  const [fotoBarbeiro, setFotoBarbeiro] = useState(null);

  function agendar() {
    const AgendamentoRequest = {
      nome,
      servico,
      dataAtendimento,
      horario,
      barbeiro,
      observacoes,
    };

    // if (!barbeiro || !nome || !dataAtendimento || !horario) {
    //   alert("Preencha com suas informações");
    //   return;
    // }

    axios
      .post("http://localhost:8080/api/agendamento", AgendamentoRequest)
      .then(() => {
        console.log("Barbeiro agendado com sucesso.");
      })
      .catch((error) => {
        console.error(
          "Erro ao incluir o agendamento:",
          error.response?.data || error.message
        );
      });
  }

  const handleSelecionarBarbeiro = (e, data) => {
    setBarbeiro(data.value);
    const selecionado = barbeirosData.find((b) => b.value === data.value);
    setFotoBarbeiro(selecionado?.foto || null);
  };

  return (
    <>
      <MenuSistema tela="agendamento" />
      <div style={styles.container}>
        {/* <div id="botao" style={styles.botoes}>
          <Button onClick={logar} primary>Login</Button>
          <Button onClick={cadastrar} secondary>Cadastrar</Button>
        </div> */}

        <img src="/corte.jpg" alt="Corte" />

        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <h3 style={styles.title}>Agendamento de Serviço</h3>
              <Form style={styles.form}>
                <Form.Field>
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do Cliente"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Data de Atendimento</label>
                  <input
                    type="date"
                    name="dataAtendimento"
                    value={dataAtendimento}
                    onChange={(e) => setDataAtendimento(e.target.value)}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Serviço</label>
                  <Dropdown
                    placeholder="Selecione um serviço"
                    fluid
                    selection
                    name="servico"
                    options={servicosOptions}
                    value={servico}
                    onChange={(e, data) => setServico(data.value)}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Barbeiro</label>
                  <Dropdown
                    placeholder="Selecione um barbeiro"
                    fluid
                    selection
                    name="barbeiro"
                    options={barbeirosData.map((b) => ({
                      key: b.key,
                      text: b.text,
                      value: b.value,
                      content: (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={b.foto}
                            alt={b.text}
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          />
                          <span>{b.text}</span>
                        </div>
                      ),
                    }))}
                    value={barbeiro}
                    onChange={handleSelecionarBarbeiro}
                  />

                  {fotoBarbeiro && (
                    <div style={{ marginTop: "10px", textAlign: "center" }}>
                      <img
                        src={fotoBarbeiro}
                        alt="Foto do barbeiro"
                        style={styles.foto}
                      />
                      <p style={{ marginTop: "5px" }}>{barbeiro}</p>
                    </div>
                  )}
                </Form.Field>

                <Form.Field>
                  <label>Horário</label>
                  <input
                    type="time"
                    name="horario"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Observações</label>
                  <textarea
                    name="observacoes"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    placeholder="Alergias, preferências, detalhes"
                  />
                </Form.Field>

                <Button
                  className="ui button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="blue"
                  floated="right"
                  onClick={agendar}
                >
                  <Icon name="save" />
                  Agendar
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default Agendamento;

const styles = {
  container: {
    minHeight: "50vh",
    backgroundColor: "#F1DCBA",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "200px",
    justifyContent: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "60px",
    textAlign: "center",
  },
  form: {
    backgroundColor: "#F1DCBA",
    padding: "10px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(211, 25, 25, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "1000px",
    width: "400%",
  },
  foto: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  botoes: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    position: "relative",
    top: "-200px",
    width: "118%",
    borderRadius: "20px",
  },
};

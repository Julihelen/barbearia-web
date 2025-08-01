import React, { useState } from "react";
import {
  Form,
  Button,
  Grid,
  Icon,
  Dropdown,
  Image,
  Rating,
  Header,
} from "semantic-ui-react";
import MenuSistema from "../../components/Menu";
import axios from "axios";
import Footer from "../../components/Footer";

const styles = {
  container: {
    minHeight: "50vh",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "200px",
    justifyContent: "center",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
    textAlign: "right",
    color: "#d19f4a",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    backgroundColor: "#0a0803",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(211, 25, 25, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    color: "white",
    border: "1px solid #bb872e",
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
    marginTop: "20px",
  },
};

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

function Avaliacao() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [barbeiro, setBarbeiro] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [fotoBarbeiro, setFotoBarbeiro] = useState(null);
  const [nota, setNota] = useState(0);

  const enviar = () => {
    const AgendamentoRequest = {
      nome,
      servico,
      barbeiro,
      observacoes,
      nota,
    };

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
  };

  const handleSelecionarBarbeiro = (e, data) => {
    setBarbeiro(data.value);
    const selecionado = barbeirosData.find((b) => b.value === data.value);
    setFotoBarbeiro(selecionado?.foto || null);
  };

  return (
    <>
      <MenuSistema tela="Avaliacao" />
      <Grid
        centered
        style={{
          minHeight: "100vh",
          backgroundColor: "#0a0803",
          paddingTop: "2em",
          paddingBottom: "2em",
        }}
        verticalAlign="top"
      >
        <Grid.Column mobile={16} tablet={10} computer={8}>
          <div style={{ textAlign: "center", marginBottom: "1em" }}>
  <Image src="/logoprovisorio.png" size="medium" centered />
</div>
<Header as="h2" style={{ color: "#bb872e", textAlign: "center" }}>
  Avaliação de Serviços
</Header>
          <Form style={styles.form}>
            <Form.Field>
              <label style={{ color: "#bb872e" }}>Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Informe seu Nome"
                style={{
                  backgroundColor: "#0a0803",
                  color: "white",
                  border: "1px solid #bb872e",
                }}
              />
            </Form.Field>

            <Form.Field>
              <label style={{ color: "#bb872e" }}>Serviço</label>
              <Dropdown
                placeholder="Selecione um serviço"
                fluid
                selection
                name="servico"
                options={servicosOptions}
                value={servico}
                onChange={(e, data) => setServico(data.value)}
                style={{
                  backgroundColor: "#0a0803",
                  color: "white",
                  border: "1px solid #bb872e",
                }}
              />
            </Form.Field>

            <Form.Field>
              <label style={{ color: "#bb872e" }}>Barbeiro</label>
              <Dropdown
                placeholder="Selecione o profissional responsável por seu atendimento"
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
                style={{
                  backgroundColor: "#0a0803",
                  color: "white",
                  border: "1px solid #bb872e",
                }}
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
              <label style={{ color: "#bb872e" }}>Avaliação do Serviço</label>
              <Rating
                maxRating={5}
                clearable
                icon="star"
                size="large"
                rating={nota}
                onRate={(e, { rating }) => setNota(rating)}
              />
            </Form.Field>

            <Form.Field>
              <label style={{ color: "#bb872e" }}>Observações</label>
              <textarea
                name="observacoes"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                placeholder="Descreva suas observações"
                style={{
                  backgroundColor: "#0a0803",
                  color: "white",
                  border: "1px solid #bb872e",
                }}
              />
            </Form.Field>

            <Button
              onClick={enviar}
              icon
              labelPosition="left"
              style={{
                backgroundColor: "#bb872e",
                color: "white",
                fontWeight: "bold",
                marginTop: "1em",
              }}
              fluid
              size="large"
            >
              <Icon name="save" />
              Enviar
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
}

export default Avaliacao;

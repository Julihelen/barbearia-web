import React, { useState } from "react";
import { Form, Button, Grid, Icon } from "semantic-ui-react";
import MenuSistema from "../../components/MenuAdmin";
import TopMenu from "../../components/TopMenu";
import api from '../util/Api'; //  importa sua instância configurada de axios

function CadastroServico() {
  const [duracaoPadrao, setDuracaoPadrao] = useState('');
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  function salvar() {
    const ServicosRequest = {
      titulo,
      descricao,
      duracaoPadrao,
      preco: parseFloat(preco),
    };

    if (!titulo || !descricao || !preco) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    api.post("/servicos", ServicosRequest)
      .then(() => {
        alert("Serviço cadastrado com sucesso!");
        setTitulo("");
        setDescricao("");
        setDuracaoPadrao("");
        setPreco("");
      })
      .catch((error) => {
        console.error(
          "Erro ao incluir um Serviço:",
          error.response?.data || error.message
        );
      });
  }

  return (
    <>
      <TopMenu />
      <MenuSistema tela="cadastroServico" />
      <div style={styles.container}>
        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <h2 style={styles.title}>Cadastro de Serviços</h2>
              <Form style={styles.form}>
                <Form.Field>
                  <label>Nome do Serviço</label>
                  <input
                    type="text"
                    name="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Ex: Corte de Cabelo"
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Descrição</label>
                  <textarea
                    name="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    style={styles.textarea}
                    placeholder="Ex: Corte masculino com tesoura e máquina"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Preço (R$)</label>
                  <input
                    type="text"
                    name="preco"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value.replace(/[^\d.,]/g, ""))}
                    onBlur={(e) => setPreco(parseFloat(e.target.value.replace(",", "."))?.toFixed(2) || "")}
                    placeholder="Ex: 40,00"
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Tempo Médio de Atendimento (em minutos)</label>
                  <input
                    type="number"
                    name="duracaoPadrao"
                    value={duracaoPadrao}
                    onChange={(e) => setDuracaoPadrao(e.target.value)}
                    placeholder="Ex: 45"
                    min="5"
                    max="180"
                    step="5"
                    style={styles.input}
                  />
                </Form.Field>

                <Button
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="blue"
                  floated="right"
                  onClick={salvar}
                  style={styles.button}
                >
                  <Icon name="save" />
                  Salvar
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default CadastroServico;

const styles = {
  container: {
    backgroundColor: "#0a0803",
    padding: "4rem",
  },
  title: {
    color: "#ffffffff",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  form: {
    backgroundColor: "#bb872e",
    padding: "1.5rem",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },
  label: {
    color: "#0a0803",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    display: "block",
  },
  input: {
    borderColor: "#ffffffff",
    borderRadius: "5px",
    padding: "0.7rem",
    color: "#0a0803",
    backgroundColor: "#fff",
  },
  textarea: {
    borderColor: "#0a0803",
    borderRadius: "5px",
    padding: "0.7rem",
    width: "100%",
    minHeight: "70px",
    color: "#0a0803",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0a0803",
    color: "#bb872e",
    fontWeight: "bold",
    marginTop: "1rem",
  },
};

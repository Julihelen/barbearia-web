import { useState, useEffect } from "react";
import { Form, Button, Grid, Icon } from "semantic-ui-react";
import MenuAdmin from "../../components/MenuAdmin";
import TopMenu from "../../components/TopMenu";
import api from "../util/Api"; // importa sua instância configurada de axios
import "semantic-ui-less/semantic.less";
import { notifySuccess, notifyError } from "../util/Util";

function CadastroBarbeiro() {
  const [nome, setNome] = useState("");
  const [foneCelular, setFoneCelular] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [atendimentoInicio, setAtendimentoInicio] = useState("");
  const [atendimentoFim, setAtendimentoFim] = useState("");
  const [senha, setSenha] = useState("");

  const [skills, setSkills] = useState([]); // serviços selecionados pelo usuário
  const [skillOptions, setSkillOptions] = useState([]); // opções vindas do backend

  // Carrega os serviços do backend e popula o dropdown
  useEffect(() => {
    api
      .get("/servicos")
      .then((response) => {
        const options = response.data.map((servico) => ({
          key: servico.id,
          value: servico.id,
          text: servico.titulo,
        }));
        setSkillOptions(options);
      })
      .catch((error) => {
        notifyError(
          "Erro ao buscar serviços: " +
            (error.response?.data || error.message)
        );
      });
  }, []);

  function limparFormulario() {
    setNome("");
    setFoneCelular("");
    setEmail("");
    setDataNascimento("");
    setCpf("");
    setEndereco("");
    setAtendimentoInicio("");
    setAtendimentoFim("");
    setSkills([]);
    setSenha("");
  }

  function validarCamposObrigatorios() {
    if (
      !nome ||
      !foneCelular ||
      !email ||
      !dataNascimento ||
      !cpf ||
      !endereco ||
      !atendimentoInicio ||
      !atendimentoFim ||
      !senha ||
      skills.length === 0
    ) {
      notifyError("Preencha todos os campos obrigatórios e selecione ao menos um serviço.");
      return false;
    }
    return true;
  }

  function salvar() {
    if (!validarCamposObrigatorios()) return;

    const BarbeiroRequest = {
      nome,
      foneCelular,
      email,
      dataNascimento,
      cpf,
      endereco,
      atendimentoInicio,
      atendimentoFim,
      senha,
      servicoIds: skills, // Envia o array de serviços selecionados
    };

    api
      .post("/barbeiros", BarbeiroRequest)
      .then(() => {
        notifySuccess("Barbeiro cadastrado com sucesso!");
        limparFormulario();
      })
      .catch((error) => {
        notifyError(
          "Erro ao incluir o barbeiro: " +
            (error.response?.data || error.message)
        );
      });
  }

  const styles = {
    title: {
      color: "#ffffffff",
      fontSize: "1.8rem",
      marginBottom: "1.5rem",
    },
    form: {
      backgroundColor: "#bb872e",
      padding: "1.5rem",
      borderRadius: "8px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
    },
    formSegment: {
      backgroundColor: "#bb872e",
      padding: "2rem",
      borderRadius: "8px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
    },
    label: {
      color: "#0a0803",
      fontWeight: "bold",
      marginBottom: "0.4rem",
      display: "block",
    },
    input: {
      border: "1px solid #bb872e",
      borderRadius: "5px",
      padding: "10px",
      color: "#0a0803",
      backgroundColor: "#fff",
    },
    dropdown: {
      border: "1px solid #bb872e",
      borderRadius: "5px",
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

  return (
    <>
      <TopMenu />
      <MenuAdmin tela={"Cadastrar barbeiro"} />
      <div style={{ textAlign: "center", marginBottom: "10em" }}></div>
      <div className="ui container">
        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column width={8}>
              <h2 style={styles.title}>Cadastro de Barbeiros</h2>

              <Form style={styles.formSegment} widths="equal">
                <Form.Field>
                  <label style={styles.label}>Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do Barbeiro"
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Field>
                  <label style={styles.label}>Data de nascimento</label>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Field>
                  <label style={styles.label}>CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="CPF"
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Field>
                  <label style={styles.label}>Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    placeholder="Endereço"
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Field>
                  <label style={styles.label}>Telefone</label>
                  <input
                    type="text"
                    name="telefone"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                    placeholder="Número de telefone"
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Field>
                  <label style={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={styles.input}
                  />
                </Form.Field>

                <Form.Group widths="equal">
                  <Form.Field>
                    <label style={styles.label}>Começo do expediente</label>
                    <input
                      type="time"
                      name="atendimentoInicio"
                      value={atendimentoInicio}
                      onChange={(e) => setAtendimentoInicio(e.target.value)}
                      style={styles.input}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label style={styles.label}>Fim do expediente</label>
                    <input
                      type="time"
                      name="atendimentoFim"
                      value={atendimentoFim}
                      onChange={(e) => setAtendimentoFim(e.target.value)}
                      style={styles.input}
                    />
                  </Form.Field>
                </Form.Group>

                <Form.Field>
                  <label style={styles.label}>Serviços do Barbeiro</label>
                  <Form.Dropdown
                    placeholder="Selecione os serviços"
                    fluid
                    multiple
                    selection
                    name="skills"
                    options={skillOptions}
                    value={skills}
                    onChange={(e, { value }) => setSkills(value)}
                    style={styles.dropdown}
                  />
                </Form.Field>

                <Form.Field>
                  <label style={styles.label}>Senha</label>
                  <input
                    type="password"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Escolha uma senha"
                    style={styles.input}
                  />
                </Form.Field>

                <Button
                  icon
                  labelPosition="left"
                  color="black"
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

export default CadastroBarbeiro;

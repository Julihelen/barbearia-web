import { useState } from "react";
import { Form, Button, Grid, Icon, Container, Image } from "semantic-ui-react";
import MenuAdmin from "../../components/MenuAdmin";
import TopMenu from "../../components/TopMenu";
import axios from "axios";
import "semantic-ui-less/semantic.less";


//skills do barbeiro - futuramente vindo direto do banco
const skillOptions = [
  { key: "barba", value: "Barba", text: "Barba" },
  { key: "corte_baixo", value: "Corte Baixo", text: "Corte Baixo" },
  { key: "corte_alto", value: "Corte Alto", text: "Corte Alto" },
  { key: "sobrancelha", value: "Sobrancelha", text: "Sobrancelha" },
  { key: "linha_corte", value: "Linha de Corte", text: "Linha de Corte" },
];

// Função para salvar os dados
function CadastroBarbeiro() {
  const [nome, setNome] = useState();
  const [foneCelular, setFoneCelular] = useState();
  const [email, setEmail] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [cpf, setCpf] = useState();
  const [endereco, setEndereco] = useState();
  const [atendimentoInicio, setAtendimentoInicio] = useState();
  const [atendimentoFim, setAtendimentoFim] = useState();
  const [senha, setSenha] = useState();
  const [skills, setSkills] = useState([]);

  function salvar() {
    let BarbeiroRequest = {
      nome: nome,
      foneCelular: foneCelular,
      email: email,
      dataNascimento: dataNascimento,
      cpf: cpf,
      endereco: endereco,
      atendimentoInicio: atendimentoInicio,
      atendimentoFim: atendimentoFim,
      skills: skills.join(", "),
      senha: senha,
    };

    //faz o post para o banco
    axios
      .post("http://localhost:8080/api/barbeiro", BarbeiroRequest)
      // exceção caso não funcione
      .then((response) => {
        console.log("barbeiro cadastrado com sucesso.");
      })
      .catch((error) => {
        console.error(
          "Erro ao incluir o barbeiro:",
          error.response?.data || error.message
        );
      });
  }

  const styles = {
    title: {
      color: '#ffffffff',
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
    },
    form: {
      backgroundColor: '#bb872e',
      padding: '1.5rem',
      borderRadius: '8px',
      border: '1px solid rgba(0, 0, 0, 0.2)'
    },
    formSegment: {
      backgroundColor: '#bb872e',
      padding: '2rem',
      borderRadius: '8px',
      border: '1px solid rgba(0, 0, 0, 0.2)'
    },
    label: {
      color: '#0a0803',
      fontWeight: 'bold',
      marginBottom: '0.4rem',
      display: 'block',
    },
    input: {
      border: '1px solid #bb872e',
      borderRadius: '5px',
      padding: '10px',
      color: '#0a0803',
      backgroundColor: '#fff',
    },
    dropdown: {
      border: '1px solid #bb872e',
      borderRadius: '5px',
      color: '#0a0803',
      backgroundColor: '#fff',
    },
    button: {
      backgroundColor: '#0a0803',
      color: '#bb872e',
      fontWeight: 'bold',
      marginTop: '1rem',
    },
  };

  return (
    <>
      <TopMenu />
      <MenuAdmin tela={"Cadastrar barbeiro"} />
      <div style={{ textAlign: "center", marginBottom: "10em" }}></div>
      <div
        className="ui container"
        style={{

        }}
      >
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
                    placeholder="Nome do Cliente"
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
                    type="text"
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
                  <label style={styles.label}>Skills do Barbeiro</label>
                  <Form.Dropdown
                    placeholder="Selecione as skills"
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
                    type="text"
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

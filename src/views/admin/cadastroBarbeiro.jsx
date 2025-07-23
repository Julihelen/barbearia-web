import { useState } from "react";
import { Form, Button, Grid, Icon, Container, Image } from "semantic-ui-react";
import MenuAdmin from "../../components/MenuAdmin";
import TopMenu from "../../components/TopMenu";
import axios from "axios";
import "semantic-ui-less/semantic.less";
import Footer from '../../components/Footer';


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
              <h3>Cadastro de Barbeiros</h3>
              <Form className="ui form form-segment" widths="equal">
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
                  <label>Data de nascimento</label>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="cpf"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    placeholder="Endereço"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Telefone</label>
                  <input
                    type="text"
                    name="telefone"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                    placeholder="Número de telefone"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Form.Field>
                <Form.Group widths="equal">
                  <Form.Field>
                    <label>Começo do expediente</label>
                    <input
                      type="time"
                      name="atendimentoInicio"
                      value={atendimentoInicio}
                      onChange={(e) => setAtendimentoInicio(e.target.value)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Fim do expediente</label>
                    <input
                      type="time"
                      name="atendimentoFim"
                      value={atendimentoFim}
                      onChange={(e) => setAtendimentoFim(e.target.value)}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Field>
                  <label>Skills do Barbeiro</label>
                  <Form.Dropdown
                    placeholder="Selecione as skills"
                    fluid
                    multiple
                    selection
                    name="skills"
                    options={skillOptions}
                    value={skills}
                    onChange={(e, { value }) => setSkills(value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Senha</label>
                  <input
                    type="text"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Escolha uma senha"
                  />
                </Form.Field>
                <Button
                  className="ui button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="black"
                  floated="right"
                  onClick={() => salvar()}
                >
                  <Icon name="save" />
                  Salvar
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
                  <Footer />
      
    </>
  );
}

export default CadastroBarbeiro;

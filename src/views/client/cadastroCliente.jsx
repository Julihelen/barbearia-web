import { useState } from 'react';
import { Form, Button, Grid, Icon, Header, Image, Segment } from 'semantic-ui-react';
import axios from 'axios';
import MenuSistema from "../../components/Menu";

function CadastroCliente() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [foneCelular, setFoneCelular] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function salvar() {
    if (!nome || !cpf || !email || !senha) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    let clienteRequest = {
      nome,
      dataNascimento,
      cpf,
      endereco,
      foneCelular,
      email,
      senha
    };

    axios.post("http://localhost:8080/api/cliente", clienteRequest)
      .then((response) => {
        console.log('Cliente cadastrado com sucesso.');
      })
      .catch((error) => {
        console.log('Erro ao incluir o cliente.');
      });
  }

  return (
    <>
      <MenuSistema tela="Cadastro Cliente" />
      <Grid
        centered
        style={{
          minHeight: '100vh',
          backgroundColor: '#0a0803',
          paddingTop: '2em',
          paddingBottom: '2em'
        }}
        verticalAlign="top"
      >
        <Grid.Column mobile={16} tablet={10} computer={8}>
          <Header as="h2" textAlign="center" style={{ color: "#bb872e" }}>
            <center><Image src='/logoprovisorio.png' size='medium' /></center>
            Cadastre-se
          </Header>

          <Segment
            style={{
              backgroundColor: "#1a1813",
              border: "1px solid #bb872e",
              boxShadow: "0 0 10px rgba(187, 135, 46, 0.2)",
            }}
          >
            <Form className="ui form">
              <Form.Field required>
                <label style={{ color: "#bb872e" }}>Nome Completo</label>
                <input
                  type="text"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder="Nome do Cliente"
                  style={{
                    backgroundColor: "#0a0803",
                    color: "white",
                    borderColor: "#bb872e"
                  }}
                />
              </Form.Field>

              <Form.Field>
                <label style={{ color: "#bb872e" }}>Data de nascimento</label>
                <input
                  type="date"
                  value={dataNascimento}
                  onChange={e => setDataNascimento(e.target.value)}
                  style={{
                    backgroundColor: "#0a0803",
                    color: "white",
                    borderColor: "#bb872e"
                  }}
                />
              </Form.Field>

              <Form.Field required>
                <label style={{ color: "#bb872e" }}>CPF</label>
                <input
                  type="text"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                  placeholder="CPF"
                  style={{
                    backgroundColor: "#0a0803",
                    color: "white",
                    borderColor: "#bb872e"
                  }}
                />
              </Form.Field>

              <Form.Field>
                <label style={{ color: "#bb872e" }}>Endereço</label>
                <input
                  type="text"
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                  placeholder="Endereço"
                  style={{
                    backgroundColor: "#0a0803",
                    color: "white",
                    borderColor: "#bb872e"
                  }}
                />
              </Form.Field>

              <Form.Field>
                <label style={{ color: "#bb872e" }}>Telefone</label>
                <input
                  type="text"
                  value={foneCelular}
                  onChange={e => setFoneCelular(e.target.value)}
                  placeholder="Telefone"
                  style={{
                    backgroundColor: "#0a0803",
                    color: "white",
                    borderColor: "#bb872e"
                  }}
                />
              </Form.Field>

              <Form.Field required>
                <label style={{ color: "#bb872e" }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{
                    backgroundColor: "#0a0803",
                    color: "white",
                    borderColor: "#bb872e"
                  }}
                />
              </Form.Field>

              <Form.Field required>
                <label style={{ color: "#bb872e" }}>Senha</label>
                <input
                  type="password"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  placeholder="Senha"
                  style={{
                    backgroundColor: "#0a0803",
                    color: "white",
                    borderColor: "#bb872e"
                  }}
                />
              </Form.Field>

              <Button
                onClick={salvar}
                icon
                labelPosition="left"
                style={{
                  backgroundColor: "#bb872e",
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "1em"
                }}
                fluid
                size="large"
              >
                <Icon name="save" />
                Enviar
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default CadastroCliente;

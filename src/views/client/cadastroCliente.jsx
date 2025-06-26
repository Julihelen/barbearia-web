import { useState } from 'react';
import { Form, Button, Grid, Icon, Header } from 'semantic-ui-react';
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
    <><MenuSistema tela="Cadastro Cliente" />
      <Grid
        centered
        style={{ minHeight: 'calc(100vh - 200px)', paddingTop: '2em' }}
        verticalAlign="top"
      >
        <Grid.Column mobile={16} tablet={10} computer={8}>
          <Header as="h2" textAlign="center" style={{ color: "#bb872e" }}>
            Cadastre-se
          </Header>
          <Form className="ui form">
            <Form.Field required>
              <label>Nome Completo</label>
              <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do Cliente" />
            </Form.Field>
            <Form.Field>
              <label>Data de nascimento</label>
              <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
            </Form.Field>
            <Form.Field required>
              <label>CPF</label>
              <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" />
            </Form.Field>
            <Form.Field>
              <label>Endereço</label>
              <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} placeholder="Endereço" />
            </Form.Field>
            <Form.Field>
              <label>Telefone</label>
              <input type="text" value={foneCelular} onChange={e => setFoneCelular(e.target.value)} placeholder="Telefone" />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            </Form.Field>
            <Form.Field required>
              <label>Senha</label>
              <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
            </Form.Field>

            <Button
              color="brown"
              icon
              labelPosition="left"
              onClick={salvar}
              floated="right"
              circular
              inverted
            >
              <Icon name="save" />
              Salvar
            </Button>
          </Form>
        </Grid.Column>
      </Grid></>
  );
}

export default CadastroCliente;

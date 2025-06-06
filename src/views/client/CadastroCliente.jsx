import { useState } from 'react';
import { Form, Button, Grid, Icon  } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import axios from "axios";


// Função para salvar os dados
function CadastroCliente() {
  const [nome, setNome] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [cpf, setCpf] = useState();
  const [endereco, setEndereco] = useState();
  const [foneCelular, setFoneCelular] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();



  function salvar() {

		let clienteRequest = {
        nome: nome,
        dataNascimento: dataNascimento,
        cpf: cpf,
        endereco: endereco,
        foneCelular: foneCelular,
        email: email,
        senha: senha
		}
    
    //faz o post para o banco
		axios.post("http://localhost:8080/api/cliente", clienteRequest)
    // exceção caso não funcione
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente.')
		})
	}

  // function formatarData(isoDate) {
  //   if (!isoDate) return '';
  //   const [ano, mes, dia] = isoDate.split('-');
  //   return `${dia}/${mes}/${ano}`;
  // }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Agendamento enviado:', formData);
  //   // Enviar para API aqui
  // };

  return (
    <>
      <MenuSistema tela={'cliente'} />
      <div className="ui container">
        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <h2> Cadastre-se </h2>
              <Form className="ui form" widths='equal'>
                <Form.Field>
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome do Cliente"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Data de nascimento</label>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={dataNascimento}  // A data é mantida no formato yyyy-MM-dd
                    onChange={e => setDataNascimento(e.target.value)}  // A data é salva diretamente no formato correto
                  />
                </Form.Field>
                <Form.Field>
                  <label>CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    placeholder="cpf"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    value={endereco}
                    onChange={e => setEndereco(e.target.value)}
                    placeholder="Endereço"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Telefone</label>
                  <input
                    type="text"
                    name="telefone"
                    value={foneCelular}
                    onChange={e => setFoneCelular(e.target.value)}
                    placeholder="Número de telefone"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Senha</label>
                  <input
                    type="text"
                    name="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="Escolha uma senha"
                  />
                </Form.Field>

                <Button
                  className="ui button"
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='blue'
                  floated='right'
                  onClick={() => salvar()}
                >
                  <Icon name='save' />
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

export default CadastroCliente;

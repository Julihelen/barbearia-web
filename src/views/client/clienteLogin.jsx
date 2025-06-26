
import MenuSistema from "../../components/Menu";
import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";



function LoginForm() {

  return (
    <><MenuSistema tela="Cadastro Cliente" />


      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <center> <Image src='/logoprovisorio.png' size='medium' /> </center>
          <Header as="h2" style={{ color: '#bb872e' }} textAlign="center">
            Login
          </Header>
          <Form size="medium">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Senha"
                type="senha"
              />
              <Button
                style={{ backgroundColor: '#bb872e', color: 'white' }}
                fluid
                size="large"
              >
                Entrar
              </Button>
            </Segment>
          </Form>
          <Message>
            Não é um cliente cadastrado? <Link to="/cadastroCliente">Cadastre-se</Link>
          </Message>

          <Button
            as={Link}
            to="/"
            icon="left arrow"
            labelPosition="left"
            color="grey"
            style={{ backgroundColor: '#bb872e', color: 'white' }}
          >
            Voltar
          </Button>
        </Grid.Column>
      </Grid></>
  );
}

export default LoginForm;

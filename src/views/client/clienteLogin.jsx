
import MenuSistema from "../../components/Menu";
import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

    

function LoginForm(){

  return (
    <><MenuSistema tela="Cadastro Cliente" />


  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="brown" textAlign="center">
        {" "}
        Faça seu login{" "}
      </Header>
      <Form size="medium">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Senha"
            type="password"
          />
          <Button color="brown" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Não é um cliente cadastrado? <Link to="/form-cliente">Cadastre-se</Link>
      </Message>

      <Button
        as={Link}
        to="/"
        icon="left arrow"
        labelPosition="left"
        color="grey"
        style={{ marginTop: "1em" }}
      >
        Voltar
      </Button>
    </Grid.Column>
  </Grid></>
  );
}

export default LoginForm;

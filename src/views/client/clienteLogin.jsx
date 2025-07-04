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
    <>
      <MenuSistema tela="Cadastro Cliente" />

      <Grid
        textAlign="center"
        style={{ height: "100vh", backgroundColor: "#0a0803" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <center>
            <Image src="/logoprovisorio.png" size="medium" />
          </center>
          <Header as="h2" style={{ color: "#bb872e" }} textAlign="center">
            Login
          </Header>
          <Form size="medium">
            <Segment
              stacked
              style={{
                backgroundColor: "#1a1813",
                border: "1px solid #bb872e",
                boxShadow: "0 0 10px rgba(187, 135, 46, 0.2)",
              }}
            >
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail"
                input={{
                  style: {
                    backgroundColor: "#0a0803",
                    color: "white",
                    border: "1px solid #bb872e"
                  }
                }}
              />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Senha"
                type="password"
                input={{
                  style: {
                    backgroundColor: "#0a0803",
                    color: "white",
                    border: "1px solid #bb872e"
                  }
                }}
              />
              <Button
                style={{
                  backgroundColor: "#bb872e",
                  color: "white",
                  fontWeight: "bold",
                }}
                fluid
                size="large"
              >
                Entrar
              </Button>
            </Segment>
          </Form>

          <Message
            style={{
              backgroundColor: "#1a1813",
              color: "#fff",
              border: "1px solid #bb872e",
            }}
          >
            Não é um cliente cadastrado?{" "}
            <Link style={{ color: "#bb872e", fontWeight: "bold" }} to="/cadastroCliente">
              Cadastre-se
            </Link>
          </Message>

          <Button
            as={Link}
            to="/"
            icon="left arrow"
            labelPosition="left"
            style={{
              backgroundColor: "#bb872e",
              color: "white",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Voltar
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default LoginForm;

import React, { useState } from "react";
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
import MenuSistema from "../../components/Menu";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [formError, setFormError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  function handleLogin() {
    const errors = [];
    if (!email) errors.push("E-mail é obrigatório.");
    if (!senha) errors.push("Senha é obrigatória.");

    if (errors.length > 0) {
      setFormError(true);
      setErrorMessages(errors);
      return;
    }

    setFormError(false);
    setErrorMessages([]);

    console.log("Login enviado:", { email, senha });
  }

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
          <Header
            as="h2"
            style={{
              color: "#bb872e",
              fontFamily: "'Palatino', 'Palatino Linotype', 'Book Antiqua', serif",
            }}
            textAlign="center"
          >
            Login
          </Header>

          <Form size="medium" error={formError}>
            <Segment
              stacked
              style={{
                backgroundColor: "#1a1813",
                border: "1px solid #bb872e",
                boxShadow: "0 0 10px rgba(187, 135, 46, 0.2)",
              }}
            >
              {formError && (
                <Message
                  error
                  header="Erro ao enviar o formulário"
                  list={errorMessages}
                />
              )}

              <Form.Field required error={!email && formError}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  input={{
                    style: {
                      backgroundColor: "#0a0803",
                      color: "white",
                      border: "1px solid #bb872e",
                    },
                  }}
                />
              </Form.Field>

              <Form.Field required error={!senha && formError}>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  input={{
                    style: {
                      backgroundColor: "#0a0803",
                      color: "white",
                      border: "1px solid #bb872e",
                    },
                  }}
                />
              </Form.Field>

              <Button
                onClick={handleLogin}
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
            <Link
              style={{ color: "#bb872e", fontWeight: "bold" }}
              to="/cadastroCliente"
            >
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

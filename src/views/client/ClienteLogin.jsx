import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginForm = () => (
  <Grid
    textAlign='center'
    verticalAlign='middle'
    style={{ minHeight: 'calc(100vh - 200px)' }} // Altura total menos menu e footer
  >
    <Grid.Column style={{ maxWidth: 370 }}>
      <Header as='h2' color='brown' textAlign='center'>
        Faça seu login
      </Header>
      <Form size='medium'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Senha'
            type='password'
          />
          <Button color='brown' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Não é um cliente cadastrado? <Link to="/form-cliente">Cadastre-se</Link>
      </Message>

      <Button as={Link} to="/home" icon='left arrow' labelPosition='left' color='grey' style={{ marginTop: '1em' }}>
        Voltar
      </Button>
    </Grid.Column>
  </Grid>
);

export default LoginForm;

import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import MenuSistema from '../../MenuSistema';
import { Link } from 'react-router-dom';import axios from 'axios';


const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='brown' textAlign='center'> Faça seu login </Header>
      <Form size='medium'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Senha'
            type='senha'
          />

          <Button color='brown' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
  Não é um cliente cadastrado? <Link to="/form-cliente">Cadastre-se</Link>
</Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm
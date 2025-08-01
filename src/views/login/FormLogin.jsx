import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { registerSuccessfulLoginForJwt } from '../util/AuthenticationService';
import { notifySuccess } from '../util/Util';

export default function FormLogin() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    async function entrar() {

        if (username !== '' && senha !== '') {

            let authenticationRequest = {
                'username': username,
                'password': senha
            }

            try {
                const response = await axios.post("http://localhost:8080/api/auth", authenticationRequest, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                registerSuccessfulLoginForJwt(response.data.token, 10000, response.data.role)
                notifySuccess("Logado com sucesso! Redirecionando...")
                setTimeout(() => {
                    navigate('/')
                }, 3000)

            } catch (error) {
                console.error("Erro de autenticação:", error.response?.data || error.message);
            }

        }
    }



    return (

        <div>

            <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>

                <Grid.Column style={{ maxWidth: 500 }}>


                    <div style={{ marginTop: '15%' }}>
                        <Header as='h2' color='grey' textAlign='center'>
                            Informe suas credenciais de acesso
                        </Header>
                    </div> <br /> <br />

                    <Form>
                        <Segment stacked>

                            <Form.Input
                                fluid
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                icon='user'
                                iconPosition='left'
                                placeholder='Informe seu e-mail'
                                required
                                maxLength="100"
                            />

                            <Form.Input
                                fluid
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                icon='lock'
                                iconPosition='left'
                                type='password'
                                placeholder='Senha'
                                required
                                maxLength="100"
                            />

                            <Button
                                fluid
                                size='large'
                                color='orange'
                                icon='sign in alternate'
                                content='Entrar'
                                onClick={(e) => {
                                    e.preventDefault()
                                    entrar()
                                }} />

                        </Segment>
                    </Form>

                    <Message>
                        Esqueceu a sua senha: <Link>clique aqui</Link>
                    </Message>

                    <Message>
                        Cadastre-se: <Link to="/cadastroCliente">clique aqui</Link>
                    </Message>

                </Grid.Column>
            </Grid>
        </div>
    )
}


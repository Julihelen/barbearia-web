import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react';
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

            <Grid textAlign='center' style={{ height: '0vh' }} verticalAlign='middle'>

                <Grid.Column style={{ maxWidth: 500 }}>
                    <div style={{ marginTop: '15%' }}>
                        <Image src="/logoprovisorio.png" size="medium" centered />
                        <Header
                            as='h2'
                            textAlign='center'
                            style={{ color: '#bb872e' }}>
                            Informe suas credenciais de acesso
                        </Header>

                    </div> <br /> <br />

                    <Form
                        style={{
                            backgroundColor: '#0a0803',
                            padding: '2em',
                            borderRadius: '10px',
                        }}
                    >
                        <Segment
                            stacked
                            style={{
                                backgroundColor: '#0a0803',
                                border: '1px solid #bb872e',
                            }}
                        >
                            <Form.Field>
                            <label style={{ color: '#bb872e', display: 'block', textAlign: 'left' }}>
                                    E-mail
                                </label>
                                <Form.Input
                                    fluid
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Informe seu e-mail"
                                    required
                                    maxLength="100"
                                    input={{
                                        style: {
                                            backgroundColor: '#0a0803',
                                            color: 'white',
                                            border: '1px solid #bb872e',
                                        },
                                    }}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label style={{ color: '#bb872e', display: 'block', textAlign: 'left' }}>
                                    Senha
                                </label>
                                <Form.Input
                                    fluid
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    icon="lock"
                                    iconPosition="left"
                                    type="password"
                                    placeholder="Senha"
                                    required
                                    maxLength="100"
                                    input={{
                                        style: {
                                            backgroundColor: '#0a0803',
                                            color: 'white',
                                            border: '1px solid #bb872e',
                                        },
                                    }}
                                />
                            </Form.Field>

                            <Button
                                fluid
                                size="large"
                                icon="sign in alternate"
                                content="Entrar"
                                style={{
                                    backgroundColor: '#bb872e',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginTop: '1em',
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    entrar();
                                }}
                            />
                        </Segment>
                    </Form>

                </Grid.Column>
            </Grid>
        </div>
    )
}


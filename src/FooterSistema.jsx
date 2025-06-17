import React from "react";
import { Segment, Container, Grid, List, Icon } from "semantic-ui-react";

function FooterSistema() {
    return (
        <Segment vertical style={{ padding: '3em 0em', marginTop: '3em', backgroundColor: '#c78e58', color: 'white' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h4 className="ui inverted header">Barbearia Chefe </h4>
                            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
                            <p>
                                <Icon name="mail" /> barbeariachefe@gmail.com
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <h4 className="ui inverted header"> Nosso Endereço</h4>
                            <p>
                                Estr. de Bulhões, S/N - Bulhões, Jaboatão dos Guararapes - PE, 54080-000
                            </p>
                            <p>
                                <Icon name="phone" /> (81) 99999-9999 </p>
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <h4 className="ui inverted header">Encontre-nos em nossas redes sociais </h4>
                            <List horizontal inverted>
                                <List.Item as="a" href="https://facebook.com" target="_blank">
                                    <Icon name="facebook" size="large" />
                                </List.Item>
                                <List.Item as="a" href="https://instagram.com" target="_blank">
                                    <Icon name="instagram" size="large" />
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
}

export default FooterSistema;

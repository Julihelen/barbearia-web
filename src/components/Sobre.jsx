import React from 'react';
import {
  Container,
  Header,
  Segment,
  Grid,
  Image,
  Icon,
  Divider,
} from 'semantic-ui-react';
import Menu from './Menu';
import Footer from './Footer';

const Sobre = () => {
  const tituloPrincipal = { color: '#bb872e' };

  return (
    <>
      <Menu> </Menu>

      <Segment vertical style={{ padding: '7em 0em', marginTop: '2em', background: '#fdfdfd' }}>
        <Container text textAlign='center'>
          <Header as='h1' style={{ ...tituloPrincipal, fontSize: '3em' }}>
            Nossa História
          </Header>
          <p style={{ fontSize: '1.33em', color: '#444' }}>
            Fundada em 2025, a Barbearia Chefe nasceu da paixão por estilo, tradição e atendimento de excelência. Criamos um espaço onde cada detalhe importa — para que você se sinta valorizado desde a recepção até o último toque do corte.
          </p>
        </Container>
      </Segment>

      <Segment vertical style={{ padding: '4em 0em' }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h2' style={tituloPrincipal}>
                Mais que uma barbearia. Uma experiência.
              </Header>
              <p style={{ fontSize: '1.2em', color: '#444' }}>
                A Chefe oferece mais do que cortes e barbas — oferecemos cuidado, estilo e personalidade.
              </p>
              <p style={{ fontSize: '1.2em', color: '#444' }}>
                Em um ambiente acolhedor, moderno e masculino, o atendimento é feito sob medida. Aqui, você entra como cliente e sai como parte da família Chefe.
              </p>
            </Grid.Column>

            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='interior.jpg'
                alt='Interior da barbearia'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical style={{ padding: '4em 0em' }}>
        <Container>
          <Header as='h2' textAlign='center' style={tituloPrincipal}>
            Por que escolher a Chefe?
          </Header>
          <Divider hidden />
          <Grid stackable columns={3} textAlign='center'>
            <Grid.Row>
              <Grid.Column>
                <Icon name='user tie' size='huge' />
                <Header as='h3' style={{ color: '#bb872e' }}> Atendimento Personalizado </Header>
                <p>Você é tratado como chefe. Aqui, cada detalhe importa.</p>
              </Grid.Column>
              <Grid.Column>
                <Icon name='cut' size='huge' />
                <Header as='h3' style={{ color: '#bb872e' }}>
                  Profissionais Qualificados
                </Header>
                <p>Barbeiros experientes, atualizados e apaixonados pelo que fazem.</p>
              </Grid.Column>
              <Grid.Column>
                <Icon name='coffee' size='huge' />
                <Header as='h3' style ={{ color: '#bb872e' }}>
                  Ambiente Acolhedor</Header>
                <p> Um espaço onde você quer estar.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

      <Footer> </Footer>
    </>
  );
};

export default Sobre;

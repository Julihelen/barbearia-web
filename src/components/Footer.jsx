import React from 'react';
import { Segment, Container, Grid, List, Header, Icon } from 'semantic-ui-react';
import styles from '../views/home/styles/Home.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Segment inverted vertical className={styles.footerSegment}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header inverted as='h4' content='Barbearia Chefe' className={styles.footerHeader} />
              <p className={styles.footerText}>
                Qualidade e estilo em cada corte. Agende seu horário e transforme seu visual.
              </p>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Links Úteis' className={styles.footerHeader} />
              <List link inverted>
                <List.Item as={Link} to="/ConsultaServicos"className={styles.footerLink}>Serviços</List.Item>
                <List.Item as={Link} to="/FormAgendamento" className={styles.footerLink}>Agendamento</List.Item>
                <List.Item as={Link}  to="/Sobre" className={styles.footerLink}>Sobre Nós</List.Item>
                <List.Item as='a' className={styles.footerLink}>FAQ</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Redes Sociais' className={styles.footerHeader} />
              <List link inverted>
                <List.Item as='a' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className={styles.footerLink}>
                  <Icon name='instagram' className={styles.socialIcon} /> Instagram
                </List.Item>
                <List.Item as='a' href='https://wa.me/' target='_blank' rel='noopener noreferrer' className={styles.footerLink}>
                  <Icon name='whatsapp' className={styles.socialIcon} /> WhatsApp
                </List.Item>
                <List.Item as='a' href='https://www.google.com/maps/' target='_blank' rel='noopener noreferrer' className={styles.footerLink}>
                  <Icon name='map marker alternate' className={styles.socialIcon} /> Localização
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className={styles.copyrightText}>
          &copy; {new Date().getFullYear()} Barbearia Chefe. Todos os direitos reservados.
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
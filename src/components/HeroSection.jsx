import React from 'react';
import { Container, Button, Header as SemanticHeader } from 'semantic-ui-react';
import styles from '../views/home/styles/Home.module.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Container text className={styles.heroContent}>
        <SemanticHeader as='h1' inverted className={styles.heroTitle}>
          ELEVE SEU ESTILO.
        </SemanticHeader>
        <SemanticHeader as='h1' inverted className={styles.heroTitle}>
          AGENDE SEU HORÁRIO.
        </SemanticHeader>
        <div className={styles.heroButtons}>
          
          <Link to="/formAgendamento"   >
          <Button size='huge' className={styles.bookNowButton} >
            AGENDAR AGORA
          </Button>
          </Link>

          <Link to="/ConsultarServicos">
          <Button size='huge' basic inverted className={styles.viewServicesButton}>
            VER SERVIÇOS
          </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
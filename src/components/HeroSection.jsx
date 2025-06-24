import React from 'react';
import { Container, Button, Header as SemanticHeader } from 'semantic-ui-react';
import styles from '../views/home/styles/Home.module.css';

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
          <Button size='huge' className={styles.bookNowButton}>
            AGENDAR AGORA
          </Button>
          <Button size='huge' basic inverted className={styles.viewServicesButton}>
            VER SERVIÇOS
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
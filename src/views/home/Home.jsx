import React from 'react';
import styles from './styles/Home.module.css';
import { Container, Embed } from 'semantic-ui-react';
import MenuSistema from '../../components/Menu';
import HeroSection from '../../components/HeroSection';
import CarouselSection from '../../components/CarouselSection';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <>
    <MenuSistema tela="home" />
    <div className={styles.homeContainer}>
      <Container fluid className={styles.mainContent}>
        <HeroSection />
        <CarouselSection />
      </Container>


 <Embed
    id='lCNZbfCgTcw'
    placeholder='/carousel1.jpg'
    source='youtube'
    style={{ width: '2000px', height: '50px', border: '2px solid #000',      borderRadius: '10px',

 }} 
  />



      <Footer />





    </div></>
  );
  
};

export default Home;
import styles from './styles/Home.module.css';
import { Container, Image } from 'semantic-ui-react';
import MenuSistema from '../../components/Menu';
import HeroSection from '../../components/HeroSection';
import CarouselSection from '../../components/CarouselSection';
import Footer from '../../components/Footer';



const Home = () => {
  return (
    <>
      <MenuSistema tela="home" />
      <div className={styles.homeContainer}>

        <Image style={{ marginTop: "-40px", marginLeft: "550px", }} src='/favicon.ico' size='medium' />

        <Container fluid className={styles.mainContent}>
          <HeroSection />
          <CarouselSection />
        </Container>
        <Footer />
      </div></>
  );

};





export default Home;
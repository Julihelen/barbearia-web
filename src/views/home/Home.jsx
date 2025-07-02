import styles from './styles/Home.module.css';
import { Container, Embed } from 'semantic-ui-react';
import MenuSistema from '../../components/Menu';
import HeroSection from '../../components/HeroSection';
import CarouselSection from '../../components/CarouselSection';
import Footer from '../../components/Footer';
import Input from '../../components/input';



const Home = () => {
  return (
    <>
    <MenuSistema tela="home" />
    <div className={styles.homeContainer}>
      <Container fluid className={styles.mainContent}>
        <Input/>
        <HeroSection />
        <CarouselSection />
      </Container>
      <Footer />
    </div></>
  );
  
};





export default Home;
import { Menu, Container,  Dropdown, Button } from 'semantic-ui-react';
import styles from '../views/home/styles/Home.module.css';
import { Link } from "react-router-dom";


const MenuSistema = ({ tela }) => {
  return (
    <Menu inverted borderless className={styles.headerMenu}>
      <Container>
        <Menu.Item 
          header 
          as={Link}
          to="/"
          className={styles.logoWrapper}
        >
          <span className={styles.logoText}>
            BARBEARIA
          </span>
        </Menu.Item>
        
        <Menu.Menu position='right'>
         
          <Dropdown item text="Serviços">
            <Dropdown.Menu >
              <Dropdown.Item
                text="Consultar serviços" 
                active={tela === "Consultar serviços"}
                as={Link}
                to="/consultarServicos"
                 className={styles.dropdown}
              />
              <Dropdown.Item
                text="Agendar serviço"
                active={tela === "agendamento"}
                as={Link}
                to="/formAgendamento"
              />
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item name='Sobre' className={styles.menuItem} />
          <Menu.Item name='Avaliações' className={styles.menuItem} />



          <Menu.Item name='Conta' className={styles.menuItem} />


          <Menu.Item name='Agendar Agora' className={styles.bookNowButton}>
            Agendar Agora
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default MenuSistema;
import React from 'react';
import { Menu, Container,  Dropdown, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import styles from '../views/home/styles/Home.module.css';

const MenuSistema = ({ tela = ""}) => {
// const MenuSistema = () => {
  return (
    <Menu inverted borderless className={styles.headerMenu}>
      <Container>
        <Menu.Item 
          header 
          active={tela === "home"}
          as={Link}
          to="/Home" className={styles.logoText}
          >
          BARBEARIA CHEFE 
        </Menu.Item>
        
        <Menu.Menu position='right'>
         
          <Dropdown item text="Clientes">
            <Dropdown.Menu >
              <Dropdown.Item
                text="Cadastros"
                active={tela === "Cadastro Cliente"}
                as={Link}
                to="/"
              />
              <Dropdown.Item
                text="Dashboard"
                // active={tela === "/"}
                // as={Link}
                // to="/"
              />
              <Dropdown.Item
                text="Agendar serviço"
                active={tela === "Agendamento barbeiro"}
                as={Link}
                to="/formAgendamento"
              />
            </Dropdown.Menu>
          </Dropdown>



          <Dropdown item text="Barbeiros">
            <Dropdown.Menu>
              <Dropdown.Item className={styles.menuItem}
                name="barbeiros"
                // content="Barbeiros"
                // active={tela === "Consulta barbeiro"}
                // as={Link}
                // to="/"
              />
              <Dropdown.Item className={styles.menuItem}
              name="Cadastrar barbeiros"
                content="Cadastrar barbeiros"
                active={tela === "Cadastrar barbeiro"}
                as={Link}
                to="/formBarbeiro"
              />
            </Dropdown.Menu>
          </Dropdown>
      

      
          <Dropdown item text="Serviços">
            <Dropdown.Menu>
              <Dropdown.Item className={styles.menuItem}
                text="Cadastrar serviços"
                active={tela === "Consultar serviços"}
                as={Link}
                to="/cadastroServicos"
              />
              <Dropdown.Item className={styles.menuItem}
                text="Manuntenção galeria"
                // active={tela === "Galeria"}
                // as={Link}
                // to="/uploadGaleria"
              />
              <Dropdown.Item className={styles.menuItem}
                text="Agenda"
                // active={tela === "Agenda"}
                // as={Link}
                // to="/agendamentos"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default MenuSistema;
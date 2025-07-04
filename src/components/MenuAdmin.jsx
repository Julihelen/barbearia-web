import React from 'react';
import { Menu, Container,  Dropdown, Button, MenuItem } from 'semantic-ui-react';
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
         
          <Dropdown item text="Administrador">
            <Dropdown.Menu >
              <Dropdown.Item
                text="Consultar agendamentos"
                active={tela === "Admin"}
                as={Link}
                to="/agendamentos"
              />
              
                
                text="Cadastro serviços"
                active={tela === "cadastroServico"}
                as={Link}
                to="/cadastroServicos"
              
            </Dropdown.Menu>
          </Dropdown>

      
    
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default MenuSistema;
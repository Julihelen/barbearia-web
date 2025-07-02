import { Menu, Container, Dropdown, Button, Icon  } from 'semantic-ui-react';
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
            BARBEARIA CHEFE
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


          <Dropdown item text="Conta">
            <Dropdown.Menu >
              <Dropdown.Item
                text="Login"
                active={tela === "Login"}
                as={Link}
                to="/clienteLogin"
              />

              <Dropdown.Item
                text="Cadastro"
                active={tela === "Cadastro"}
                as={Link}
                to="/cadastroCliente"
                className={styles.dropdown}
              />
            </Dropdown.Menu>
          </Dropdown>



          <Dropdown item text="Avaliações">
            <Dropdown.Menu >
              <Dropdown.Item
                text="Faça sua avaliação"
                active={tela === "Avaliacao"}
                as={Link}
                to="/formAvaliacao"
                className={styles.dropdown} />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item 
            as={Link}
            to="/consultarServicos" 
            className={styles.bookNowButton}>
            Agendar Agora
          </Menu.Item>

          <Menu.Item>
            <Button basic icon className={styles.carrinhoButton}> {/* Use a classe do CSS Module */}
              <Icon name="add shopping cart" className={styles.carrinhoIcon} /> {/* Aplique a classe ao ícone também */}
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default MenuSistema;
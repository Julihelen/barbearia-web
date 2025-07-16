import { Menu, Container, Dropdown, Button, Icon } from 'semantic-ui-react';
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
          {/* Serviços */}
          <Dropdown item text="Serviços">
            <Dropdown.Menu>
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

          <Menu.Item
            name='Sobre'
            as={Link}
            to="/sobre"
            className={styles.menuItem}
          />

          {/* Cliente */}
          <Dropdown item text="Cliente">
            <Dropdown.Menu>
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

          {/* Avaliações */}
          <Dropdown item text="Avaliações">
            <Dropdown.Menu>
              <Dropdown.Item
                text="Faça sua avaliação"
                active={tela === "Avaliacao"}
                as={Link}
                to="/formAvaliacao"
                className={styles.dropdown}
              />
            </Dropdown.Menu>
          </Dropdown>

          {/* Agendar Agora */}
          <Menu.Item
            as={Link}
            to="/consultarServicos"
            className={styles.bookNowButton}
          >
            Agendar Agora
          </Menu.Item>


          <Menu.Item>
            <Button basic icon className={styles.carrinhoButton}>
              <Icon name="add shopping cart" className={styles.carrinhoIcon} />
            </Button>
          </Menu.Item>
          
          {/* Aqui começa o menu do administrador */}
          <Menu.Item
            name='Administrador'
            as={Link}
            to="/dashboard"
            className={styles.menuItem}
          />

        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default MenuSistema;

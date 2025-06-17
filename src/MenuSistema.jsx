import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button } from "semantic-ui-react";

function MenuSistema(props) {
  return (
    <Menu inverted size="tiny">
      <Menu.Item
        name="home"
        content="Home"
        active={props.tela === "Tela inicial"}
        as={Link}
        to="/"
      />

      <Menu.Item
        name="barbeiro"
        content="Barbeiro"
        active={props.tela === "Cadastrar barbeiro"}
        as={Link}
        to="/form-barbeiro"
      />

      <Menu.Menu position="right">
        <Dropdown item text="Serviços ">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Consultar serviços"
              active={props.tela === "Consultar serviços"}
              as={Link}
              to="/consultar-servicos"
            />
            <Dropdown.Item
              text="Agendar serviço"
              active={props.tela === "Agendar serviço"}
              as={Link}
              to="/form-agendamento"
            />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>
          <Button
            primary
            content="Login"
            as={Link}
            to="/login-cliente"
          />
          <Menu.Item
            name="Cadastre-se"
            content="Cadastre-se"
            active={props.tela === "Cadastre-se"}
            as={Link}
            to="/form-cliente"
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default MenuSistema;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react';

const MenuAdmin = ({ activeItem, onMenuClick }) => {
  return (
    <>
      <Menu vertical fixed='left' inverted style={{ height: '200vh', marginTop: '3.5em' }}>
        <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={() => onMenuClick('dashboard')}
        >
          <Icon name='user plus' />
          Barbeiros
        </Menu.Item>
        <Menu.Item
          name='barbeiros'
          active={activeItem === 'barbeiros'}
          onClick={() => onMenuClick('formBarbeiro')}
        >
          <Icon name='users' />
          Clientes
        </Menu.Item>
        <Menu.Item
          name='agendamentos'
          active={activeItem === 'agendamentos'}
          onClick={() => onMenuClick('agendamentos')}
        >
          <Icon
            name='clipboard list' />
          Serviços
        </Menu.Item>
        <Menu.Item
          name='servicos'
          active={activeItem === 'servicos'}
          onClick={() => onMenuClick('CadastroServicos')}
        >
          <Icon name='calendar alternate' />
          Agendamentos
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuAdmin;

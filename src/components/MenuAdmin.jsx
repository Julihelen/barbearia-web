import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const MenuAdmin = ({ activeItem = '', onMenuClick = () => {} }) => {
  return (
    <Menu vertical fixed='left' inverted style={{ height: '200vh', marginTop: '3.5em' }}>
      <Menu.Item
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={() => onMenuClick('dashboard')}
      >
        <Icon name='dashboard' />
        Dashboard
      </Menu.Item>

      <Menu.Item
        name='barbeiros'
        active={activeItem === 'barbeiros'}
        onClick={() => onMenuClick('barbeiros')}
      >
        <Icon name='users' />
        Clientes
      </Menu.Item>

      <Menu.Item
        name='servicos'
        active={activeItem === 'servicos'}
        onClick={() => onMenuClick('servicos')}
      >
        <Icon name='clipboard list' />
        Serviços
      </Menu.Item>

      <Menu.Item
        name='agendamentos'
        active={activeItem === 'agendamentos'}
        onClick={() => onMenuClick('agendamentos')}
      >
        <Icon name='calendar alternate' />
        Agendamentos
      </Menu.Item>
    </Menu>
  );
};

export default MenuAdmin;

import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuAdmin = ({ activeItem = '', onMenuClick = () => {} }) => {
  return (
    <Menu
      vertical
      fixed='left'
      inverted
      style={{ height: '100vh', marginTop: '3em', width: '180px' }}
    >
      <Menu.Item
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={() => onMenuClick('dashboard')}
        as={Link}
        to="/dashboard"
      >
        <Icon name='dashboard' />
        Dashboard
      </Menu.Item>

      <Menu.Item
        name='clientes'
        active={activeItem === 'clientes'}
        onClick={() => onMenuClick('clientes')}
        as={Link}
        to="/listarClientes"
      >
        <Icon name='users' />
        Clientes
      </Menu.Item>

      <Menu.Item
        name='servicos'
        active={activeItem === 'servicos'}
        onClick={() => onMenuClick('servicos')}
        as={Link}
        to="/CadastroServicos"
      >
        <Icon name='check' />
        Serviços
      </Menu.Item>

      <Menu.Item
        name='agendamentos'
        active={activeItem === 'agendamentos'}
        onClick={() => onMenuClick('agendamentos')}
        as={Link}
        to="/agendamentos"
      >
        <Icon name='calendar alternate' />
        Agendamentos
      </Menu.Item>

      <Menu.Item
        name='Cadastrar Barbeiros'
        active={activeItem === 'barbeiros'}
        onClick={() => onMenuClick('barbeiros')}
        as={Link}
        to="/cadastroBarbeiro"
      >
        <Icon name='users' />
        Cadastrar barbeiros
      </Menu.Item>

      <Menu.Item
        name='Barbeiros'
        active={activeItem === 'barbeiros'}
        onClick={() => onMenuClick('barbeiros')}
        as={Link}
        to="/listarBarbeiros"
      >
        <Icon name='users' />
        Barbeiros
      </Menu.Item>
    </Menu>
  );
};

export default MenuAdmin;

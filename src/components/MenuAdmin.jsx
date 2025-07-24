import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
 
const MenuAdmin = ({ activeItem = '', onMenuClick = () => { } }) => {
  return (
    <>
      <Menu vertical fixed='left' inverted style={{ height: '100vh', marginTop: '3.5em' }}>
        <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={() => onMenuClick('dashboard')}
          as='a'
          href="/dashboard"
        >
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>

        <Menu.Item
          name='servicos'
          active={activeItem === 'servicos'}
          onClick={() => onMenuClick('servicos')}
          as='a'
          href="/CadastroServicos"
        >
          <Icon name='check' />
          Serviços
        </Menu.Item>

        <Menu.Item
          name='agendamentos'
          active={activeItem === 'agendamentos'}
          onClick={() => onMenuClick('agendamentos')}
          as='a'
          href="/agendamentos"
        >
          <Icon name='calendar alternate' />
          Agendamentos

        </Menu.Item>

        <Menu.Item
          name='Cadastrar Barbeiros'
          active={activeItem === 'barbeiros'}
          onClick={() => onMenuClick('barbeiros')}
          as='a'
          href="/formBarbeiro"

        >
          <Icon name='users' />
         Cadastrar barbeiros

        </Menu.Item>
        <Menu.Item
          name='Barbeiros'
          active={activeItem === 'barbeiros'}
          onClick={() => onMenuClick('barbeiros')}
          as='a'
          href="/listarBarbeiros"

        >
          <Icon name='users' />
          Barbeiros

        </Menu.Item>

      </Menu>
    </>
  );
};

export default MenuAdmin;

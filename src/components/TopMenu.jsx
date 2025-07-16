import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const TopMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); 
  };

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          Barbearia Chefe
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item onClick={handleLogout}>
            <Icon name='sign-out' />
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default TopMenu;

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TextIcon from '../components/TextIcon';

class SideMenu extends Component {
  state = {
    activeItem: 'dashboard',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  changeSize = () => this.setState({ smallSidebar: !this.props.smallMenu });

  getMenu() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='left' borderless className={(this.props.smallMenu ? 'small-side' : '') + ' side'} vertical>
        <Menu.Item as={Link} to='/' name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
          <TextIcon hideText={this.props.smallMenu} color='teal' name='home'>
            Dashboard
          </TextIcon>
        </Menu.Item>

        <Menu.Item as={Link} to='/agendamentos' name='agendamentos' active={activeItem === 'agendamentos'} onClick={this.handleItemClick}>
          <TextIcon hideText={this.props.smallMenu} name='calendar'>
            Agendamentos
          </TextIcon>
        </Menu.Item>

        <Menu.Item as={Link} to='/formBarbeiro' name='formbarbeiro' active={activeItem === 'cadastrobarbeiro'} onClick={this.handleItemClick}>
          <TextIcon hideText={this.props.smallMenu} name='users'>
            Barbeiros
          </TextIcon>
        </Menu.Item>


        <Menu.Item as={Link} to='/cadastroservicos' name='servicos' active={activeItem === 'cadastroservicos'} onClick={this.handleItemClick}>
          <TextIcon hideText={this.props.smallMenu} name='clipboard'>
            Serviços
          </TextIcon>
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <div className='parent'>
        <div className={(this.props.smallMenu ? 'small-side ' : '') + 'side'}>
          {this.getMenu()}
        </div>
        <div className={(this.props.smallMenu ? 'small-content ' : '') + 'content'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default SideMenu;

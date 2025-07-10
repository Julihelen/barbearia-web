import React, {Component} from 'react'
import {Icon,
        Image,
        Input, 
        Label, 
        Menu,  
       } from 'semantic-ui-react'
import layout from '../components/layout';

class TopMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  doSearch(event) {
      this.props.actions.search(event.target.value);  
  }

  render() {
    return (
      <Menu fixed="top" className="top-menu">
        <Menu.Item className="logo-space-menu-item">
          <div className="display-inline logo-space">
            <Image src="" size ="mini" />
            <p> Dashboard</p>
          </div>
        </Menu.Item>

        <Menu.Item
          className="no-border"
        >
          <Icon name="bars" />
        </Menu.Item>

        <Menu.Item className="no-border drop-left-padding">
          <Input
            className="icon"
            icon="search"
            placeholder="Search..."
            onChange={(event) => this.doSearch(event)}
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item className="no-border" position="right">

            <Label
              className="label-on-corner"
              color="teal"
              size={"mini"}
              floating
              circular
            >
              22
            </Label>
          </Menu.Item>
          <Menu.Item className="no-border" position="right">
            <div className="display-inline">
              <Image
                circular
                size={"mini"}
                src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
              />
              Administrador 
            </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TopMenu; 
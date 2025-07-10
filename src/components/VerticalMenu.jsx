import React, { Component } from "react";
import { Icon, Menu, Rail } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class VerticalMenu extends Component {
    state = { activeItem: "dashboard" };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu fluid inverted vertical>
                <NavLink to={"/agendamentos"}>
                    <Menu.Item
                        name="dashboard"
                        active={activeItem === "dashboard"}
                        onClick={this.handleItemClick}
                    >
                        <Rail position="left">
                            <Icon color="teal" name="home" />
                        </Rail>
                        Dashboard
                    </Menu.Item>
                </NavLink>

                <NavLink to={"/appointments"} exact>
                    <Menu.Item
                        name="appointments"
                        active={activeItem === "appointments"}
                        onClick={this.handleItemClick}
                    >
                        <Icon name="calendar" />
                        Agendamentos
                    </Menu.Item>
                </NavLink>

                <NavLink to={"/clientes"} exact>
                    <Menu.Item
                        name="clientes"
                        active={activeItem === "clientes"}
                        onClick={this.handleItemClick}
                    >
                        <Icon name="users" />
                        Clientes
                    </Menu.Item>
                </NavLink>

                <NavLink to={"/Barbeiros"} exact>
                    <Menu.Item
                        name="barbeiros"
                        active={activeItem === "barbeiros"}
                        onClick={this.handleItemClick}
                    >
                        Barbeiros
                    </Menu.Item>
                </NavLink>
            </Menu>
        );
    }
}
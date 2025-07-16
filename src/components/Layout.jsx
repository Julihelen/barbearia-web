import React from 'react';
import TopMenu from "../components/TopMenu";
import MenuAdmin from '../components/MenuAdmin';

export default props => (
    <div className="grid">
        <div className="menu">
            <TopMenu/>
        </div>
        <div className="main-content">
            <MenuAdmin>
                {props.children}
            </MenuAdmin>
        </div>
    </div>
);
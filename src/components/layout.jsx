import React from 'react';
import TopMenu from '../components/TopMenu';

export default props => (
    <div className="grid">
        <div className="menu">
            <TopMenu />
        </div>
        <div className="main-content">
            {props.children}
        </div>
    </div>
);
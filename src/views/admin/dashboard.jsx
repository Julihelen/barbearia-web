import React, { Component } from 'react';
import MenuAdmin from '../../components/MenuAdmin';
import { Segment, Grid } from 'semantic-ui-react';
import TopMenu from '../../components/TopMenu'; 

class Dashboard extends Component {
render() {
  return (
    <>
    <div> <MenuAdmin/> </div>
    <div>   <TopMenu/> </div>

      <h1>Dashboard</h1>
    </>
  );
}

}

export default Dashboard;
import React, { Component } from 'react';
import MenuAdmin from '../../components/MenuAdmin';
import { Segment, Grid } from 'semantic-ui-react';
import VerticalMenu from '../../components/VerticalMenu';

class Dashboard extends Component {
render() {
  return (
    <>
    <div> <VerticalMenu/> </div>
      <h1>Dashboard</h1>
    </>
  );
}

}

export default Dashboard;
import React, { Component } from 'react';
import MenuAdmin from '../../components/MenuAdmin';
import { Segment, Grid } from 'semantic-ui-react';
import TopMenu from '../../components/TopMenu'; 
import Footer from '../../components/Footer';
class Dashboard extends Component {
render() {
  return (
    <>
    <div> <MenuAdmin/> </div>
    <div> <TopMenu/> </div> 
                <Footer />
    
    
    </>
  );
}

}

export default Dashboard;
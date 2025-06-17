import { Menu, Segment } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FooterSistema from "./FooterSistema";
import Rotas from './Rotas';
import 'semantic-ui-css/semantic.min.css';
import './theme.css';



function App() {

  return (
    <>
      <div className="App">

        <Rotas /> {/*Importando as rotas*/}

        <div style={{ marginTop: '9%' }}>
          <FooterSistema />

        </div>
      </div>
    </>
  );
}

export default App;

import { Segment, Menu } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './Rotas';
import 'semantic-ui-css/semantic.min.css'; 
import './theme.css';



function App() {

return (
  <>
    <div className="App">
      
      <Rotas /> {/*Importando as rotas*/}

      <div style={{marginTop: '9%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2025 - Barbearia Chefe - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  </>
);
}

export default App;

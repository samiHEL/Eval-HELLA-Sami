import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from './Composant/Menu';
import Form from './Composant/Form';

import { Article } from './Composant/Article';



function App() {
  // const titre = "premier composant";
  // const age = 12;
  // const nom = "Alain";
  // const formation = "Formation au sein de H3";
  return (
    <div className='container'>
      <header className='row'>
      <Menu/>
      <br/>
      
      </header>
      <main className='row'>
      <Article/>
     
      </main>
    </div>
  );
}

export default App;

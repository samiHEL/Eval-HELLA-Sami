import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from './Composant/Menu';
import Form from './Composant/Form';

import { Article } from './Composant/Article';



function App() {

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

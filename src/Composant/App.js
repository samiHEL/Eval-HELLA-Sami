import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from './Composants2/Menu';
import Form from './Composants2/Form';
import Exo from './Composants2/Exo';
import { Article } from './Composants2/Article';
import Troisieme from './Composants/Troisieme';
import Deuxieme from './Composants/Quatrieme';
import Quatrieme from './Composants/Quatrieme';
import Cinquieme from './Composants/Cinquieme';
import { Sixieme } from './Composants/Sixieme';
import { Septieme } from './Composants/Septieme';


function App() {
  // const titre = "premier composant";
  // const age = 12;
  // const nom = "Alain";
  // const formation = "Formation au sein de H3";
  return (
    <div className='container'>
      <header className='row'>
      <Menu></Menu>
      
      
      </header>
      <main className='row'>
      <Exo/>
      <Article />
      <Troisieme/>
      <Sixieme/>
      <Septieme/>
     
      </main>
    </div>
  );
}

export default App;

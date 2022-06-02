import './App.css';
import MUNavbar from './components/MUNavbar';
import Background from './components/Bg';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <><MUNavbar/>
    <ItemListContainer Lista={'Aqui van los articulos'}/>
    <Background/>
</>
  );
}

export default App;

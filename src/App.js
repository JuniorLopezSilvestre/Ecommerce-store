import './App.css';
import MUNavbar from './components/MUNavbar';
import Background from './components/Bg';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';




function App() {

const onAdd = (count) =>{
  alert(`Agregaste ${count} productos` );
}



  return (
    <>
    <MUNavbar/>
    <ItemListContainer Lista={'Bienvenidos'}/>
    {/*<ItemCount  inicial={1} max={10} onAdd={onAdd}/>*/}
    <Item/>
    {/*<Background/> */}
    </>
  );
}

export default App;

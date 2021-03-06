import Box from '@mui/material/Box'
import MUNavbar from './components/shared/Navbar';
import Background from './components/shared/Bg';
import ItemListContainer from './components/shared/ItemListContainer';
import ItemCount from './components/views/ItemCount';
import Item from './components/views/Item';
import theme from './theme'
import { ThemeProvider } from "@mui/material/styles";

function App() {

const onAdd = (count) =>{
  alert(`Agregaste ${count} productos` );
}
  return (
    <ThemeProvider theme={theme}>
    <MUNavbar/>
    {/*<ItemCount  inicial={1} max={10} onAdd={onAdd}/>*/}
    <Box sx={{mt:6}}>
      <Item/>
      <ItemListContainer/>
      {/*<Background/> */}
    </Box>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting='Bienvenidos a Uva y Cuajo'/>
        <ItemDetailContainer/>
    </div> 
  )
}

export default App;

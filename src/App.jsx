import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'


function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Uva y Cuajo'/>}/>
            <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenidos a Uva y Cuajo'/>}/>
            <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
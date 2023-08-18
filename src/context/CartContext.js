 import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const productosLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];
export const CartProvider = ({ children }) => {

const [cart, setCart] = useState(productosLocalStorage);


useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart));
}, [cart]);


const addItem = (item, count) => {
    setCart([...cart, { ...item, quantity: count}]);
};

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  console.log(cart, 'carrito');
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        isInCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}; 
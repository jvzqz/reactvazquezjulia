import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    
    const {cart, clear, total} = useContext (CartContext);
    return(
        <div>
            {cart.length
              ? <div>
                  <div>
                    {cart.map ((item)=> <CartItem key={item.id} item={item}/>)}
                    <p>Total a pagar: ${total()}</p>
                  </div>
                  <div>
                    <Button onClick={clear}>Vaciar Carrito</Button>
                    <Link to='./checkout'>Terminar compra</Link>
                  </div>
              </div>
              :<div>
                   <h3>Tu carrito está vacío.</h3>
                   <Link to='/'>Ir a comprar</Link>
               </div>
            }
        </div>

    )
}

export default Cart;
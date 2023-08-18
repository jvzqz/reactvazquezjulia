import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    
    const {cart, clear, total} = useContext (CartContext);
    return(
        <div>
            {cart.lenght
              ? <div>
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
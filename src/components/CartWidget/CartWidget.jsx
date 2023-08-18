import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

    const {cartQuantity} = useContext (CartContext)
 
    return (
        <div>
            <i className="bi bi-cart2 text-light"></i>
            <p className="text-light">{cartQuantity()}</p>
        </div>
    ) 
}

export default CartWidget;
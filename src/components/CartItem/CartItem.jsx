import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {

    const {deleteItem} = useContext(CartContext);

    return (
        <div>
            <img src={item.img} alt={item.name}></img>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub total: {item.quantity * item.price}</p>
            <Button onClick={()=>deleteItem(item.id)}> X </Button>
        </div>
    )

}


export default CartItem; 
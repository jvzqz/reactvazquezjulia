import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = (props) => {

    const { name, description, price, stock, img, id } = props;
    const { addItem } = useContext(CartContext);
    
    const onAdd = (count) => {
        let item = { name, description, price, stock, img, id };
    addItem(item, count);
    };

    return (
        <div>
            <h3> Detalles del producto : {producto.name} </h3>
            <p> {producto.description} </p>
            <p> $ {producto.price} </p>
            <ItemCount inicial={1} stock={producto.stock} onAdd={handleOnAdd}/>
        </div>
    );
    };

export default ItemDetail;
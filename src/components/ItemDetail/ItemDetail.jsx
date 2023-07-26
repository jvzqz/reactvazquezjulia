import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        console.log ('Compraste {cantidad} de productos')
    }
    return (
        <div>
            <h3> Detalles del producto : {producto.name} </h3>
            <p> {producto.description} </p>
            <p> $ {producto.precio} </p>
            <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail;
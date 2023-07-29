import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({producto}) => {
    const onAdd = (count) => {
        console.log ('Compraste {count} de productos')
    }
    return (
        <div>
            <h3> Detalles del producto : {producto.name} </h3>
            <p> {producto.description} </p>
            <p> $ {producto.price} </p>
            <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail;
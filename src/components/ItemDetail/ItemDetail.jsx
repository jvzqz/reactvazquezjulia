import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemDetail = (props) => {
    const [purchase, setPurchase]= useState(false)
    const { name, description, price, stock, img, id } = props.producto;
    const { addItem } = useContext(CartContext);
    
    const onAdd = (count) => {
        let item = { name, description, price, stock, img, id };
        addItem(item, count);
        setPurchase(true)
    };

    return (
        <div>
            <h3> Detalles del producto : {name} </h3>
            <p> {description} </p>
            <p> $ {price} </p>
            <Button className="btn btn-dark">{purchase ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount inicial={1} stock={stock} onAdd={onAdd}/>}</Button>
        </div>
    );
    };

export default ItemDetail;
import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState ()

    const sumar = () => {
        setCount = (count+1)
    }

    const restar = () => {
        if (count>0) {
        setCount = (count-1)
        }
    }

    return (
        <div>
            <div>
                <Button onClick={restar}>-</Button>
                <spam>{count}</spam>
                <Button onClick={sumar}>+</Button>
            </div>
            <Button>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;
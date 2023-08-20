import { useEffect, useReducer } from "react";
import React from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase"
import { collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";

const ItemDetailContainer = () => {

    const {id} = useParams ();

    const [producto, setProducto] = useState ('');

    useEffect (() => {
        const collectionProd = collection (db, 'productos')
        const refAlDoc = doc(collectionProd, id)
        getDoc (refAlDoc)
        .then ((res) => setProducto (res))
        .catch ((error) => console.log (error))
    }, [])

        /*useEffect (() => {
        getItem (id)
        .then ((res) => setProducto (res))
        .catch ((error) => console.log (error))
    }, [id]) */


    return (
        <div>
           <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';

const ItemListContainer = (props) => {
    
   const [productos, setProductos] = useState ([])
    
    useEffect (()=> {
      getProducts ()
      .then((res)=> setProductos (res))
      .catch ((error)=> console.long (error))

    },[])
    console.log (productos);
 
    return (
      <>
        <h1>{props.greeting}</h1>
        <ItemList productos={productos}/>  
      </>
    )
 
}

export default ItemListContainer;


import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    
   const [productos, setProductos] = useState ([])
   const {category}= useParams()
    
    useEffect (()=> {
      getProducts ()
      .then((res)=> {
        if(category){res.filter((item)=> item.category === category)
        }else{
          setProductos (res)}
        })
      .catch ((error)=> console.long (error))

    },[category])
    console.log (productos);
 
    return (
      <>
        <h1>{props.greeting} <span>{category && category}</span></h1>
        <ItemList productos={productos}/>  
      </>
    )
 
}

export default ItemListContainer;


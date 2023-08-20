import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../service/firebase';


const ItemListContainer = (props) => {
    
   const [productos, setProductos] = useState ([])
   const {category}= useParams()
    
  /* useEffect (()=> {
    getProducts ()
    .then((res)=> {
      if(category){
     setProductos(res.filter((item)=> item.category === category))
      }else{
        setProductos(res)}
      })
    .catch ((error)=> console.log (error))
    },[category]);*/

    useEffect (()=> {
      const coleccionProductos = category ? query (collection(db, "productos"), where("category", "==", category)):collection(db, "productos")
      getDocs (coleccionProductos)
      .then((res)=> {
        const list = res.docs.map((product)=>{
          return {
            id:product.id,
            ...product.data()
          }
        })
        setProductos(list);
      })
      .catch ((error)=> console.log(error))
    },[category])
 
 
    return (
      <>
        <h1>{props.greeting} <span>{category && category}</span></h1>
        <ItemList productos={productos}/>  
      </>
    )

 
}

export default ItemListContainer;


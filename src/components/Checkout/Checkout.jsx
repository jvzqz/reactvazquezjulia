import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../service/firebase";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    
    const [user, setUser]= useState({
        name:'',
        phone:'',
        email:'',
    });
    const [valiteEmail, setValidateEmail] = useState('');
    const {cart, total, clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState('');

    const datosComprador = (e) => {
       setUser({
        ...user,
        [e.target.name]:e.target.value
       })
    }

        console.log (user)

        const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name && !user.phone && !user.email){
            alert ('Campos incompletos')
        }else{
            let order = {
                user,
                item:cart,
                total:total() ,
                date:serverTimestamp, 

            }

            const venta = collection(db, "orders")
            addDoc(venta,order)
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }

    return (
        <div>
            {orderId !== ''
            ? <div>
                <h2>Su orden fue generada con éxito</h2>
                <h3>El id de su registro es: {orderId}</h3>
            </div> 
            :<div>
               <h2>Terminar compra</h2>
               <h5>Completá con tus datos:</h5>
               <form onSubmit={finalizarCompra}>
                   <div className='mb-3'>
                       <label className='form-label'> Nombre y apellido:  </label>
                       <input onChange={datosComprador} value ={user.name} className='form-control' type='text' placeholder='Nombre y Apellido' name='name'/>
                    </div>
                    <div className='mb-3'>
                       <label className='form-label'> Ingrese su número de teléfono: </label>
                       <input onChange={datosComprador} value ={user.phone} className='form-control' type='number' placeholder='Sin guiones' name='phone'/>
                    </div>
                    <div className='mb-3'>
                       <label className='form-label'> Ingrese mail: </label>
                       <input onChange={datosComprador} value ={user.mail} className='form-control' type='email' placeholder='xxxxxxx@xxx.com' name='mail'/>
                    </div>
                    <div className='mb-3'>
                       <label className='form-label'> Repita su mail: </label>
                       <input className='form-control' type='email' placeholder='xxxxxxx@xxx.com' name='mail' onChange={((e)=>setValidateEmail(e.target.value))}/>
                    </div>
                    <Button className="btn btn-dark" disabled={valiteEmail !== user.mail}> Generar orden</Button> 
                </form>
             </div>}   
        </div>
    )
}

export default Checkout;


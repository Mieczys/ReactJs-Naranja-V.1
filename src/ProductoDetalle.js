import React, {useState, useEffect} from 'react';
import Producto from './Producto';
import { getById } from './services/Productos';
import firebase from './Config/firebase'
import { Button, Container, Row, Card, Toast } from 'react-bootstrap';
const ProductoDetalle = (props)=> {
      const [showA, setShowA] = useState(false);
      const toggleShowA = () => setShowA(!showA);
      const [producto,setProducto] = useState({})
      useEffect(
        () => {
            firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(doc=>{
              setProducto(doc.data())
            })
      }, []); 
   
    return (
        <>
        
        {
            producto && 
            <div>

                <Producto data={producto} detalleButtons={false}/> 

                <button className="buttondet" style={{position: 'absolute',bottom: 65,right: 20,}} value="Comprar" onClick={toggleShowA}>Comprar</button>
            </div>
        }            
        <Toast show={showA} onClose={toggleShowA} style={{ position: 'absolute', top: 200,right: 20,}}>
          <Toast.Header>
              <strong className="mr-auto"></strong>
          </Toast.Header>
          <Toast.Body>Compra exitosa</Toast.Body>
        </Toast>
         </> 
    )  
}
export default ProductoDetalle;
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import firebase from './Config/firebase'

import { render } from "react-dom";
import { storage } from "./Config/firebase";


/*import ReactFirebaseFileUpload from "./Image"*/
import Jumbotron from "react-bootstrap/Jumbotron";


import './App.css';
import { Button, Container, Row, Card, Toast } from 'react-bootstrap';


function ProductoAlta(){
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [datos,setDatos] = useState({name:'',price:'',detail:"",sku:"", imagen:""});
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name

        setDatos({
            ...datos,
            [name]:value
        })
    }
    const handleSubmit =  (e)=>{
        console.log(datos)
        firebase.db.collection('productos').add(datos)
        .then(doc=>{console.log(doc)})
        e.preventDefault();
    }

/* <ReactFirebaseFileUpload />*/
    return(
        <Jumbotron fluid expand="sm">
        <Container>
        <div>
        <h1>Alta de productos</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" value={datos.name} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Detalle</label>
                    <input type="text" name="detail" value={datos.detail} onChange={handleChange}></input>
                </div>
                <div>
                    <label>SKU</label>
                    <input type="number" name="sku" value={datos.sku} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Precio</label>
                    <input type="number" name="price" value={datos.price} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Imagen</label>
                    <input type="text" placeholder="URL de imagen" name="imagen" value={datos.imagen} onChange={handleChange} onCopy={handleChange}></input>
                </div>
                <br></br>
                <button className='buttondet' type="submit" value="Guardar" onClick={toggleShowA}>Cargar</button>
                
                <Toast show={showA} onClose={toggleShowA} style={{ position: 'absolute', top: 200,right: 20,}}>
          <Toast.Header>
              <strong className="mr-auto">Cambios Realizados</strong>
          </Toast.Header>
          <Toast.Body>Carga exitosa</Toast.Body>
        </Toast>
            </form>
        </div>
        </Container>
    </Jumbotron >
    
    )
}



export default ProductoAlta
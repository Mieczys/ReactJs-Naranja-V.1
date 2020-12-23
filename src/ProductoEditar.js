import React, {useState, useEffect} from 'react';
import firebase from './Config/firebase'
import Jumbotron from "react-bootstrap/Jumbotron";
import './App.css';
import { Button, Container, Row, Card, Toast } from 'react-bootstrap';

function ProductoEditar(props){
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [datos,setDatos] = useState({name:'',price:'',detail:"",sku:"", imagen:""});
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data())
            })
    }, []); 
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
        const id = props.match.params.id;
        firebase.db.doc("productos/"+id)
        .set({
            name:datos.name,
            price:datos.price,
            sku:datos.sku,
            detail:datos.detail,
            imagen:datos.imagen,
        },{merge:true})
        .then(doc=>{
            console.log(doc)
        })
        e.preventDefault();
    }
    const handleDelete = (e)=>{
        e.preventDefault();
        const id = props.match.params.id;
        console.log(id)
        firebase.db.doc("productos/"+id)
        .delete()
        .then(doc=>{
            console.log(doc)
        })
    };
    return(
        <Jumbotron fluid>
        <Container fluid>
        
        
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
                <button className="buttondet" type="submit" value="Guardar" onClick={toggleShowA}>Guardar</button>
                <button className='buttondet' onClick={handleDelete}>Eliminar</button>

                <Toast show={showA} onClose={toggleShowA} style={{ position: 'absolute', top: 200,right: 20,}}>
          <Toast.Header>
              <strong className="mr-auto">Cambios Realizados</strong>
          </Toast.Header>
          <Toast.Body>Operación exitosa</Toast.Body>
        </Toast>
            </form>
            
        </Container>
    </Jumbotron >
    )
}

export default ProductoEditar

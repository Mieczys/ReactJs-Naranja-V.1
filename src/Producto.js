import React from 'react';
import {Link} from "react-router-dom";
import { Card,Button, CardGroup} from 'react-bootstrap';
import ListGroup from "react-bootstrap/ListGroup"
import './App.css';
import Jumbotron from "react-bootstrap/Jumbotron"
import Col from "react-bootstrap/Col"

function Producto(props) {
    console.log(props)
  return (
    <Col>
    <Card  className='text-center' style={{ width: '19rem' }}>
      <Card.Img variant="top" src={props.data.imagen} alt={props.data.nombre} style={{
                        width: '100%', height: '40vh'
                    }} />
      <Card.Body >
        <Card.Title><h1>{props.data.name}</h1></Card.Title>
        <Card.Text><p>{props.data.detail}</p></Card.Text>
      </Card.Body>
      <Card.Footer >
  <small className="text-muted">
  <p>SKU:{props.data.sku}</p>
  </small>
  <small className="text-muted">
  <h2>${props.data.price}</h2>
  </small>
  
        {props.detalleButtons &&
        <>
  <button className="buttondet">
          <Link to={'/producto/detalle/'+props.id} style={{color:'rgb(255,255,255)'}}>Ver detalle</Link>
          </button>
          <br></br>
          <br></br>
          <button className="buttondet">
          <Link to={'/producto/editar/'+props.id} style={{color:'rgb(255,255,255)'}}>Editar Producto</Link>
        </button>
        </>
}
</Card.Footer>
</Card>
<br></br>
</Col>


  );

}

export default Producto;
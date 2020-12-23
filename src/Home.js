import React,{Component} from 'react';
import Producto from './Producto'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './App.css';
import firebase from './Config/firebase'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
    }
    componentDidMount(){
       firebase.db.collection('productos')
      .get()
      .then(querySnapshot=>{
        console.log("query",querySnapshot.docs)
        this.setState({
            productos:querySnapshot.docs
        })
       })
    }


    
    render(){

        return (
            <div>

            <Container fluid>
                <Row xs={1} md={4}>
                
                    {this.state.productos.map (producto=>
                    
                    <Producto 
                    key={producto.id} 
                    id={producto.id} 
                    data={producto.data()}
                    detalleButtons={true}
                    />
                    )
                    }
                </Row>
            </Container>
</div>

        )
    }
}

export default Home;



/*<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>*/
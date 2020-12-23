import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { Navbar,  Nav,Alert,Container} from 'react-bootstrap';
import Wbuy from './Includes/Images/wbuy.png';
import Button from 'react-bootstrap/Button';

class Menu extends Component{

    render(){
        return (

            <Navbar sticky="top" collapseOnSelect bg="warning" expand="lg" style={{marginBottom:'10px'}}>
                <Navbar.Brand href="/"><img src={Wbuy} className='App-logo' alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    
                    {this.props.data.map(opcion=><Nav.Link as={Link} to={opcion.path}><button className='buttondet'>{opcion.name}</button></Nav.Link>)}

                    
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}

export default Menu;

import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Menu from './Menu'
import Home from './Home'
import Login from './Login';
import Registro from './Registro';
import ProductoDetalle from './ProductoDetalle';
import { getProductos } from './services/Productos';
import ProductoAlta from './ProductoAlta';
import firebase from './Config/firebase'
import ProductoEditar from './ProductoEditar';

function App() {
  
  const[estado,setEstado] = useState({
    opcionesMenu:[{name:'Home',path:"/"},{name:'Login',path:"/login"},{name:'Registrarse',path:"/registro"},{name:'Alta de producto',path:"/producto/alta"}]
  }) //para cambiar nombre de botones en navbar header
  
 
  const handleClick = ()=>{
      setEstado({...estado,opcionesMenu:[{name:'Home',path:"/"},{name:'Logout',path:"/login"}]})
  }
  return (
    <BrowserRouter>
                  
        <Menu data={estado.opcionesMenu} click={handleClick}/>
        <Route path="/" exact  component={()=><Home/>} />
        <Route path="/login" exact  component={Login} />
        <Route path="/registro" exact  component={Registro} />
        <Route path="/producto/detalle/:id" exact  component={ProductoDetalle} />
        <Route path="/producto/alta" exact  component={ProductoAlta} />
        <Route path="/producto/editar/:id" exact  component={ProductoEditar} />
        <Route path="/producto/editar" exact  component={ProductoEditar} />
        
        
    </BrowserRouter>
  );
}

export default App;

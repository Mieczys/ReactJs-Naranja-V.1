import React, {useState} from 'react';


import firebase from './Config/firebase'
import { Link } from 'react-router-dom'

import './App.css';
import Jumbotron from "react-bootstrap/Jumbotron"

import { Button, Container, Row, Card, Toast } from 'react-bootstrap';

const Login = (props) => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  });

  let handleLogin = (event, valor) => {
    
    firebase.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
    .then((data)=>{
      console.log("data",data)
    })
    .catch(error=>{
      console.log("error",error)
    })
    
    event.stopPropagation();
    event.preventDefault();
  }

  let handleForm = (event) => {
      setUsuario({...usuario, [event.target.name]: event.target.value});
    // switch (field) {
    //   case 'usuario':
    //     setUsuario({...usuario, usuario: event.target.value});
    //     break;
    //   case 'password':
    //     setUsuario({...usuario, password: event.target.value});
    //     break;
    event.preventDefault();
    //   default:
    //     break;
  }

  return (            
    <Jumbotron fluid>
        <Container>
        <div className="App">
          <h1>Ingresar</h1>
<form onSubmit={handleLogin}>
<input type="text" placeholder="Email" name="email" value={usuario.email} onChange={(event)=>handleForm(event)} />
<br/>
<input type="text" placeholder="Password" name="password" value={usuario.password} onChange={(event)=>handleForm(event)} />
<br/>
<button className='buttondet' type="submit" onClick={toggleShowA}>Login</button>

<Toast show={showA} onClose={toggleShowA} style={{ position: 'absolute', top: 200,right: 20,}}>
          <Toast.Header>
              <strong className="mr-auto">Bienvenido</strong>
          </Toast.Header>
          <Toast.Body>Ya estás logeado</Toast.Body>
        </Toast>
</form>
</div>
    </Container>
    </Jumbotron >
    
        
    

  );
}
export default Login;

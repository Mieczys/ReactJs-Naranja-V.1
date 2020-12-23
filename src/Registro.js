import React, {useState, useEffect} from 'react';
import firebase from './Config/firebase';
import { useHistory } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Container, Row, Card, Toast } from 'react-bootstrap';

import './App.css';
const Registro = (props) => {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const history = useHistory();
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    
  const handleSubmit = (e)=>{
      setSpinner(true);
      let email=form.email;
      let password=form.password;    
      firebase.auth.createUserWithEmailAndPassword(email, password)
      .then((data)=>{
          console.log("Usuario creado",data.user.uid)
          firebase.db.collection("usuarios").add({
              nombre: form.nombre,
              apellido: form.apellido,
              email: form.email,
              userId: data.user.uid
            })
            .then((data)=>{
                  setSpinner(false);
                console.log(data)
                history.push("/login");
            })
            .catch((err)=>{
              console.log(err)
              setSpinner(false);
              })
      })
      .catch((error)=>{
          console.log("Error",error)
          setSpinner(false);
      })
      e.preventDefault();
  }
  const handleChange = (e)=>{

    const target = e.target;
    const value = target.value
    const name = target.name;


    setForm({
        ...form,
        [name] : value});
    
  }
    return(
        <Jumbotron fluid >
        <Container >
        <div>
        <h1>Registrarse</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" name="nombre" value={form.usuario} onChange={handleChange} />
                </div>
                <br/>
                <div>
                    <label>Apellido</label>
                    <input type="text" placeholder="Ingrese su apellido" name="apellido"  value={form.usuario} onChange={handleChange} />
                </div>
                <br/>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Ingrese su email" name="email" value={form.usuario} onChange={handleChange} />
                </div>
                <br/>
                <div>
                    <label>Password(al menos 6 caracteres)</label>
                    <input type="password" placeholder="Ingrese password" name="password" value={form.password} onChange={handleChange} />
                </div>
                <br/>

                <button className='buttondet' type="submit" value="Guardar" onClick={toggleShowA}>Registrar</button>

                <Toast show={showA} onClose={toggleShowA} style={{ position: 'absolute', top: 200,right: 20,}}>
          <Toast.Header>
              <strong className="mr-auto">Alta exitosa</strong>
          </Toast.Header>
          <Toast.Body>Registro realizado</Toast.Body>
        </Toast>
            </form>
        </div>
        </Container>
    </Jumbotron >
    )
}

export default Registro
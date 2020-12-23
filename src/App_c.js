import React,{Component} from 'react';
import Menu from './Menu'
import Home from './Home'
import Producto from './Producto'
class App extends Component{
    constructor(){
        super()
        this.state = {
            opcionesMenu:['Home','Login','Registro'],
            productos:[]
        }
       
    }
    componentDidMount(){
        fetch(`https://jsonfy.com/items`)
        .then(response => response.json())
        .then(data =>{
            console.log("Data",data) 
            this.setState({
                productos:data
            }) 
            console.log("state",this.state)          
        })
        .catch(error => {
            console.log(error);
        });
        //alert("...")
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate",prevProps, prevState)
    }
    handleClick = ()=>{
        this.setState({
            opcionesMenu:['Logout','Home']
        })
    }
    
    render(){
        
        return (
            <div>
               
                <Menu data={this.state.opcionesMenu} click={this.handleClick}/>
                <Home productos={this.state.productos}/>
                
                
                
            </div>
        )
    }
}

export default App;
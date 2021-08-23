import React from 'react'
import { Link } from 'react-router-dom';


class Login extends React.Component{


    render(){
        return(
            <React.Fragment>
                <div id="contenedor">
                <div><h1>Login</h1>
                </div>
                 <div>
                     <label>Nombre de usuario</label>
                 </div>
                 <div><input type="text" id="user"></input></div>
                 <div>
                     <label>Contraseña</label>
                 </div>
                 <div> <input type="password" id="password"></input></div>
                 <div>
                     <Link to='/main'>  <button type="button">Login</button></Link>
                   
                 </div>
                 </div>
            
            </React.Fragment>
           
        
        )
    }
}

export default Login;
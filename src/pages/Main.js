import React from 'react'
import { Link } from 'react-router-dom';

class Main extends React.Component{


render(){
    return(
        <React.Fragment>
<div>
    <h1>Hola Mundo</h1>

<div>
    <Link to='/notFound'><button type="button">Ir al desconocido</button></Link>

</div>
</div>
        </React.Fragment>
    )
}
}
export default Main;
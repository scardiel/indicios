import {useRouteError, Link} from 'react-router-dom'

const NotFound = () => { 
    
    const error = useRouteError();
    console.log(error)
    
    return (
        <div>
            <h1>{error.status}</h1>
            <h2>{error.statusText}</h2>    
            <Link to='/'>Volver al inicio</Link>
        </div>
        )
 }

 export default NotFound
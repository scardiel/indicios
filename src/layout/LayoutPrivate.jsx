import {Outlet} from'react-router-dom'
import Footer from '../pages/Footer'
import NavBar from '../components/NavBar'
import { useUserContext } from '../context/UserContext';


const LayoutPrivate = () => { 

    const {user} = useUserContext();

    const usuario = JSON.parse(sessionStorage.getItem('usuario'))

    if(usuario.login){
        return(
            <div className='container'>
                <NavBar />
                <main className='container'>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        )
        }

 }

 export default LayoutPrivate
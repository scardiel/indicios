import {Outlet, useNavigate} from'react-router-dom'
import Footer from '../pages/Footer'
import NavBar from '../components/NavBar'
import { useUserContext } from '../context/UserContext';

const LayoutPrivate = () => { 

    const {user} = useUserContext();
    const navigate = useNavigate();
  
    if(user.login){
        return(
            <div className='container'>
                <NavBar />
                <main className='container'>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        )
    
    }else{
        navigate('/')
    }

 }

 export default LayoutPrivate
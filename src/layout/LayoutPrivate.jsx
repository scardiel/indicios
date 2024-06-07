import {Outlet, useNavigate} from'react-router-dom'
import Footer from '../pages/Footer'
import NavBar from '../components/NavBar'
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';


const LayoutPrivate = () => { 

    const {user} = useUserContext();
//    const navigate = useNavigate();


    // useEffect(() => { 
    //     console.log('Se modifico el usuario')
    //     if(!user.login){
    //         navigate('/')
    //     }else{
    //         navigate('/menu')
    //     }
    //  },[user]);


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
        }

 }

 export default LayoutPrivate
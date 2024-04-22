import {Outlet} from'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../pages/Footer'

const LayoutPublic = () => { 
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

 export default LayoutPublic
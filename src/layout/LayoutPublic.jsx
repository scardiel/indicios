import {Outlet} from'react-router-dom'

const LayoutPublic = () => { 
    return(
        <div className='container'>
            <main className='container'>
                <Outlet/>
            </main>
        </div>
    )
 }

 export default LayoutPublic
import imagen from '../assets/images/Luz_optica.jpg'

const Menu = () => { 
    return (
        <img src={imagen} className="img-fluid" style={{
            resizeMode: 'cover',
            height: 700,
            width: 1400,
          }}></img>
    )
 }

 export default Menu
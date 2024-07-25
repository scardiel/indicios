import imagen from '../assets/images/FGR.jpg'

const Menu = () => { 
    return (
        <img src={imagen} className="img-fluid" style={{
            resizeMode: 'cover',
            height: 500,
            width: 1000,
          }}></img>
    )
 }

 export default Menu
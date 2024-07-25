import imagen from '../assets/images/FGR.jpg'

const Inicio = () => { 
    return (
        <img src={imagen} className="img-fluid" style={{
            resizeMode: 'cover',
            height: 350,
            width: 700,
          }}></img>
    )
 }

 export default Inicio
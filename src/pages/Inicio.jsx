import imagen from '../assets/images/Luz_optica.jpg'

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
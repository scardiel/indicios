import PropTypes from "prop-types"

const BotonIngersar = (props) => { 
    const {handlerSubmit} = props
    return(
        <button className="btn btn-primary mx-3" type="button" onClick={handlerSubmit} name="guardar">Ingresar</button>
    )
 }

 BotonIngersar.propTypes = {
    handlerSubmit: PropTypes.func
 }

 export default BotonIngersar
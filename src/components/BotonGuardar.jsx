import PropTypes from "prop-types"

const BotonGuardar = (props) => { 
    const {handlerSubmit} = props
    return(
        <button className="btn btn-primary mx-3" type="button" onClick={handlerSubmit} name="guardar">Guardar</button>
    )
 }

 BotonGuardar.propTypes = {
    handlerSubmit: PropTypes.func
 }

 export default BotonGuardar
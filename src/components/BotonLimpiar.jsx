const BotonLimpiar = (params) => { 
    
    const {setUsuario, setPassword} = params

    function handleronClick(){
        setUsuario('') 
        setPassword('')
    }

    return (
        <button className="btn btn-warning mx-3" type="button" name="limpiar" onClick={handleronClick}>Limpiar</button>
    )
 }

 export default BotonLimpiar
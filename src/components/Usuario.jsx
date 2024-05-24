const Usuario = (params) => { 

    const {usuario, setUsuario} = params;

    function handleOnChange(e){
        const {value} = e.target
        setUsuario(value)
    }

    return(
        <div>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" className="form-control mb2" value={usuario} placeholder="Ingrese el usuario" name="usuario" id="usuario" onChange={handleOnChange} />
        </div>
    )
 }

 export default Usuario
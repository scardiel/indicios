const Password = (params) => { 
    
    const {password, setPassword} = params;

    function handleOnChenage(e){
        const {value} = e.target
        setPassword(value)
    }
    
    return(
        <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" className="mb-2 form-control" id="password" name="password" value={password} onChange={handleOnChenage} placeholder="Ingrese el password"/>
        </div>
    )
 }

 export default Password
import { useState } from "react"


const Observaciones = () => { 

    const [observaciones, setObservaciones] = useState('')

    const handlerChange = (e) => { 
        const {value} = e.target
        setObservaciones(value)        
     }

    return(
        <div className="mt-4 mb-2">
            <label htmlFor="txtObservaciones" className="form-label">Observaciones</label>
            <textarea className="form-control" id="txtObservaciones" rows="3" placeholder="Observaciones" name="observaciones" value={observaciones} onChange={handlerChange}></textarea>
        </div>

) }

export default Observaciones
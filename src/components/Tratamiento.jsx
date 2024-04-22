import { useState } from "react"

const Tratamiento = () => { 

    const [optSinTratamiento, setOptSinTratamiento] = useState(false)
    const [optAntiReflejante, setOptAntiReflejante] = useState(false)
    const [optBloqueoLuzAzul, setOptBloqueoLuzAzul] = useState(false)
    const [optPhotoW, setOptPhotoW] = useState(false)
    const [optPhotoAR, setOptPhotoAR] = useState(false)
    const [optPhotoBlue, setOptPhotoBlue] = useState(false)
  
    function limpiaTrat(){
        setOptSinTratamiento(false)
        setOptAntiReflejante(false)
        setOptBloqueoLuzAzul(false)
        setOptPhotoW(false)
        setOptPhotoAR(false)
        setOptPhotoBlue(false)
      }
    

    const handlerChange = (e) => { 

        const{name} = e.target

        switch (name){ 
            case 'optSinTratamiento': 
            limpiaTrat()
            setOptSinTratamiento(true)
            break;
            case 'optAntiReflejante': 
            limpiaTrat()
            setOptAntiReflejante(true)
            break;
            case 'optBloqueoLuzAzul': 
            limpiaTrat()
            setOptBloqueoLuzAzul(true)
            break;
            case 'optPhotoW': 
            limpiaTrat()
            setOptPhotoW(true)
            break;
            case 'optPhotoAR': 
            limpiaTrat()
            setOptPhotoAR(true)
            break;
            case 'optPhotoBlue': 
            limpiaTrat()
            setOptPhotoBlue(true)
            break;
            default:
               break;
          }
            
     }


    return(
        <div className="container col m-2">
            <label htmlFor="">TRATAMIENTO</label>
            <div className="form-check">
                <input className="form-check-input" type="radio" id="optSinTratamiento" name="optSinTratamiento" onChange={handlerChange} checked={optSinTratamiento}/>
                <label className="form-check-label" htmlFor="optSinTratamiento">W (Sin Tratamiento)</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" id="optAntiReflejante" name="optAntiReflejante" onChange={handlerChange} checked={optAntiReflejante}/>
                <label className="form-check-label" htmlFor="optAntiReflejante">AR (Anti Reflejante)</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" id="optBloqueoLuzAzul" name="optBloqueoLuzAzul" onChange={handlerChange} checked={optBloqueoLuzAzul}/>
                <label className="form-check-label" htmlFor="optBloqueoLuzAzul">Blue (Bloqueo de Luz Azul)</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" id="optPhotoW" name="optPhotoW" onChange={handlerChange} checked={optPhotoW}/>
                <label className="form-check-label" htmlFor="optPhotoW">Photo W</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" id="optPhotoAR" name="optPhotoAR" onChange={handlerChange} checked={optPhotoAR}/>
                <label className="form-check-label" htmlFor="optPhotoAR">Photo AR</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" id="optPhotoBlue" name="optPhotoBlue" onChange={handlerChange} checked={optPhotoBlue}/>
                <label className="form-check-label" htmlFor="optPhotoBlue">Photo Blue</label>
            </div>
        </div>
    )
 }

 export default Tratamiento
import { useState } from "react"

const TipoMica = () => { 

    const [optMonofocal, setOptMonofocal] = useState(false)
    const [optFlatTop, setOptFlatTop] = useState(false)
    const [optInvisible, setOptInvisible] = useState(false)
    const [optProgresivo, setOptProgresivo] = useState(false)
  

    const handlerChange = (e) => { 

        const{name} = e.target
        switch (name){ 
            case 'optMonofocal': 
            limpiaMica()
            setOptMonofocal(true)
            break;
            case 'optFlatTop': 
            limpiaMica()
            setOptFlatTop(true)
            break;
            case 'optInvisible': 
            limpiaMica()
            setOptInvisible(true)
            break;
            case 'optProgresivo': 
            limpiaMica()
            setOptProgresivo(true)
            break;
            default:
            break;
        }
     }

     function limpiaMica(){
        setOptMonofocal(false)
        setOptFlatTop(false)
        setOptInvisible(false)
        setOptProgresivo(false)
      }
    

    return(
        <div className="container col m-2">
        <label htmlFor="">TIPO DE MICA</label>
        <div className="form-check">
            <input className="form-check-input" type="radio" id="optMonofocal" name="optMonofocal" onChange={handlerChange} checked={optMonofocal}/>
            <label className="form-check-label" htmlFor="optMonofocal">Monofocal</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" id="optFlatTop" name="optFlatTop" onChange={handlerChange} checked={optFlatTop}/>
            <label className="form-check-label" htmlFor="optFlatTop">Flat Top</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" id="optInvisible" name="optInvisible" onChange={handlerChange} checked={optInvisible}/>
            <label className="form-check-label" htmlFor="optInvisible">Invisible</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" id="optProgresivo" name="optProgresivo" onChange={handlerChange} checked={optProgresivo}/>
            <label className="form-check-label" htmlFor="optProgresivo">Progresivo</label>
        </div>
    </div>
)
 }

 export default TipoMica
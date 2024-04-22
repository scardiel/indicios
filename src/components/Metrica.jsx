import { useState } from "react";


const Metrica = () => { 

    const [esferaod, setEsferaod] = useState(0);
    const [cilindrood, setCilindrood] = useState(0);
    const [ejeod, setEjeod] = useState(0);
    const [adicionod, setAdicionod] = useState(1);

    const [esferaoi, setEsferaoi] = useState(0);
    const [cilindrooi, setCilindrooi] = useState(0);
    const [ejeoi, setEjeoi] = useState(0);
    const [adicionoi, setAdicionoi] = useState(1);

    const handlerChange = (e) => { 

        const{name, value} = e.target

        switch (name){ 
            case 'esferaod': 
            setEsferaod(value)
            break;
            case 'cilindrood':
    //        if(value!=0){setEjedenabled(false)}   
            setCilindrood(value)
            break;
            case 'ejeod': 
            setEjeod(value)
            break;
            case 'adicionod': 
            setAdicionod(value)
            setAdicionoi(value)
            break;
            case 'esferaoi': 
            setEsferaoi(value)
            break;
            case 'cilindrooi': 
            setCilindrooi(value)
            break;
            case 'ejeoi': 
            setEjeoi(value)
    //        if(value!=0){setEjeienabled(false)}
            break;
            case 'adicionoi': 
            setAdicionoi(value)
            setAdicionod(value)
            break;
            default:
                break;
        }
     }

    return(
        <div>
          <div className="container">
          <div className="row mt-5 mb-2">
            <div className="col">
              <label>    </label>
            </div>
            <div className="col">
              <label>Esfera</label>
            </div>
            <div className="col">
              <label>Cilindro</label>
            </div>
            <div className="col">
              <label>Eje</label>
            </div>
            <div className="col">
              <label>Adición</label>
            </div>
          </div>
        </div>
            <div className="row mx-2">
                <label className="col-1 mx-1 text-center">OD</label>
                <input type="number" className="form-control col mx-2" placeholder="Esfera OD" id="esferaod" name="esferaod" min={-15} max={15} step={.25} value={esferaod} onChange={handlerChange}/>
                <input type="number" className="form-control col mx-2" placeholder="Cilindro OD" id="cilindrood" name="cilindrood" min={-6} max={0} step={.25} value={cilindrood} onChange={handlerChange}/>
                <input type="number" className="form-control col mx-2" placeholder="Eje OD" id="ejeod" name="ejeod" min={0} max={180} step={1} value={ejeod} onChange={handlerChange} />
                <input type="number" className="form-control col mx-2" placeholder="Adición" id="adicionod" name="adicionod" value={adicionod} min={1} max={3.5} step={.25} onChange={handlerChange}/>
            </div>

            <div className="row mx-2 mt-2">
                <label className="col-1 mx-1 text-center">OI</label>
                <input type="number" className="form-control col mx-2" placeholder="Esfera OI" id="esferaoi" name="esferaoi" min={-15} max={15} step={.25} value={esferaoi} onChange={handlerChange}/>
                <input type="number" className="form-control col mx-2" placeholder="Cilindro OI" id="cilindrooi" name="cilindrooi" min={-6} max={0} step={.25} value={cilindrooi} onChange={handlerChange}/>
                <input type="number" className="form-control col mx-2" placeholder="Eje OI" id="ejeoi" name="ejeoi" min={0} max={180} step={1} value={ejeoi} onChange={handlerChange} />
                <input type="number" className="form-control col mx-2" placeholder="Adición" id="adicionoi" name="adicionoi" value={adicionoi} min={1} max={3.5} step={.25} onChange={handlerChange}/>
            </div>
        </div>




)}

export default Metrica
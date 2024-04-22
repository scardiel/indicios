import BotonGuardar from "../components/BotonGuardar";
import BotonLimpiar from "../components/BotonLimpiar";
import Clientes from "../components/Clientes";
import Metrica from "../components/Metrica";
import Observaciones from "../components/Observaciones";
import TipoMica from "../components/TipoMica";
import Tratamiento from "../components/Tratamiento";


const CapturaOrden = () => {


  function handlerSubmit(e){
    console.log(e)
  }

  return (
    <div className="container my-2">
      <form>
        <Clientes />
        <Metrica/>
        <Observaciones/>
        <div className="container row">
          <TipoMica/>
          <Tratamiento/>
        </div>
        <div className="text-center my-5">
          <BotonGuardar handlerSubmit = {handlerSubmit}/>
          <BotonLimpiar/>
        </div>
      </form>
    </div>
  );
};

export default CapturaOrden;

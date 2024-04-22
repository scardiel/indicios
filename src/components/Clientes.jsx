import { useState } from "react";

const Clientes = () => {
     
    const [cliente, setCliente] = useState('')


    function handlerChange(e){
        const {value} = e.target
        setCliente(value)
    }

    return (
    <div>
      <label className="" htmlFor="txtCliente">
        Cliente
      </label>
      <input
        className="form-control mb-2"
        type="text"
        id="txtCliente"
        name="txtCliente"
        value={cliente}
        placeholder="Ingrese cliente"
        onChange={handlerChange}
      />
    </div>
  );
};

export default Clientes;

import Modal from "antd/es/modal/Modal";
import TextArea from "antd/es/input/TextArea";

const ModalObs = (params) => {
  const { isModalOpenObs, setIsModalOpenObs, obs, setObs, objeto, setRegistro} = params;

//  const keyActual = keyActualP;
  

  const handleOkObs = () => {

    const nuevoObjeto = {...objeto, observaciones : obs}
    fetch('http://localhost:4000/api/indicios',{
      method: 'PUT', 
      headers:{'Content-Type': 'application/json' }, 
      body: JSON.stringify(nuevoObjeto)
    })
    setIsModalOpenObs(false);
  };

  const handleCancelObs = () => {
    setIsModalOpenObs(false);
  };

  const handleChangeObs = (e) => {
    setObs(e.target.value)
    setRegistro({...objeto, observaciones: e.target.value})
  };

  return (
    <>
      <Modal
        title="Observaciones"
        open={isModalOpenObs}
        onOk={handleOkObs}
        onCancel={handleCancelObs}
      >
        <TextArea
          onChange={handleChangeObs}
          value={obs}
        ></TextArea>
      </Modal>
    </>
  );
};

export default ModalObs;

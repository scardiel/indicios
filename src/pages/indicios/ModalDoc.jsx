import {Button, message, Upload} from 'antd'
import Modal from 'antd/es/modal/Modal';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';




const ModalDoc = (params) => { 

    const {keyActualP, isModalOpenDoc, setIsModalOpenDoc, docList, setDocList} = params

    const props = {
      name: 'file',
      fileList: docList,
      action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
      headers: {
        authorization: 'authorization-text',
      },
    };


    const handlePreviewDoc = async (info) => {
      return (
        window.open(info.url)
      );
    };

    const keyActual = keyActualP;

    const showModalDoc = (key) => {
      fetch('http://localhost:4000/api/Documentos/'+key, {
        method: 'GET', 
        headers:{'Content-Type': 'application/json' }, 
        body: JSON.stringify() 
       })
       .then(response => {return response.json()})
       .then(result =>{ setDocList(result.body)})
  
      setIsModalOpenDoc(true);
    };

    const handleOkDoc = () => {
      setIsModalOpenDoc(false);
    };

    const handleCancelDoc = () => {
      setIsModalOpenDoc(false);
    };
    
    const handleChangeDoc = (info) => {

      const nuevoDoc = {
        id: 0,
        id_usr: keyActual,
        url: 'http://localhost:5173/documentos/'+info.file.name,
        name: info.file.name,
        status: 'done'
      }

        switch(info.file.status){
          case 'uploading':
            fetch('http://localhost:4000/api/documentos',{
              method: 'POST', 
              headers:{'Content-Type': 'application/json' }, 
              body: JSON.stringify(nuevoDoc)
            })
            showModalDoc(keyActual)    /// Poner el key de quien se refresh el modal

                break;
          case 'removed':
            var borrarImg = {...nuevoDoc, id: info.file.id}
            fetch('http://localhost:4000/api/documentos',{
              method: 'DELETE', 
              headers:{'Content-Type': 'application/json' }, 
              body: JSON.stringify(borrarImg)
            })
            break;
          default:
            break;
        }
        setDocList(info.fileList)
        message.success(`${info.file.name} file uploaded successfully`);
    };



    return (
      <>
        <Modal
          title="Documentos"
          open={isModalOpenDoc}
          onOk={handleOkDoc}
          onCancel={handleCancelDoc}
        >
          <>
            <Upload {...props}
              onChange={handleChangeDoc}
              onPreview={handlePreviewDoc}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </>
        </Modal>
      </>
    );

}

export default ModalDoc
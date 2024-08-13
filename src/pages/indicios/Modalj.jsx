import {Image, Upload} from 'antd'
import Modal from 'antd/es/modal/Modal';
import uploadButton from './uploadButton';
import { useState } from 'react';


const Modalj = (params) => { 

    const {keyActualP, isModalOpen, setIsModalOpen, fileList, setFileList} = params

//    const [fileList, setFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');



    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
    };

    const keyActual = keyActualP;

    const showModal = (key) => {
      fetch('http://localhost:4000/api/Imagenes/'+key, {
        method: 'GET', 
        headers:{'Content-Type': 'application/json' }, 
        body: JSON.stringify() 
       })
       .then(response => {return response.json()})
       .then(result =>{ setFileList(result.body)})
  
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
    
    const handleChange = ({ fileList: newFileList, file }) => {

        const nuevaImg = {
          id: 0,
          id_usr: keyActual,
          url: 'http://localhost:5173/images/'+file.name
        }

        switch(file.status){
          case 'uploading':
            fetch('http://localhost:4000/api/imagenes',{
              method: 'POST', 
              headers:{'Content-Type': 'application/json' }, 
              body: JSON.stringify(nuevaImg)
            })
            showModal(keyActual)    /// Poner el key de quien se refresh el modal

                break;
          case 'removed':
            var borrarImg = {...nuevaImg, id: file.id}
            fetch('http://localhost:4000/api/imagenes',{
              method: 'DELETE', 
              headers:{'Content-Type': 'application/json' }, 
              body: JSON.stringify(borrarImg)
            })
            break;
          default:
            break;
        }
        setFileList(newFileList)
    };



    return (
        <Modal title="Imagenes" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>  
      <>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: "none",
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </>
      </Modal>
    );

}


export default Modalj
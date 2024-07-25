
import { useEffect, useRef, useState } from 'react'
//import Datatable from 'react-data-table-component'
import {Button, Checkbox, Col, Form, Image, Input, InputNumber, Popconfirm, Row, Space, Table, Upload} from 'antd'
import moment from 'moment';
import Search from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import Modal from 'antd/es/modal/Modal';
import { PlusOutlined } from '@ant-design/icons';

var keyActual = 0;

const IndiciosFilter = () => {

    const [data, setData] = useState([]);
    const [editar, setEditar] = useState(false);
    const [buscar, setBuscar] = useState('')
    const [form] = Form.useForm();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([
    ]);
    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
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
          showModal(keyActual)    /// Poner el key de quien se refresh el modla

              break;
        case 'removed':
          var borrarImg = {...nuevaImg, id: file.id}
          fetch('http://localhost:4000/api/imagenes',{
            method: 'PUT', 
            headers:{'Content-Type': 'application/json' }, 
            body: JSON.stringify(borrarImg)
          })
          break;
        default:
          break;
      }
      setFileList(newFileList)
    };
    
    const uploadButton = (
      <button
        style={{
          border: 0,
          background: 'none',
        }}
        type="button"
      >
        <PlusOutlined />
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </button>
    );


  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filtrar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Cerrar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  function getImageUrl(name) {
    return new URL(`/public/images/${name}.jpg`, import.meta.url).href
  }


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (key) => {
    keyActual = key;
//    console.log('KEy actalizada', keyActual)
    fetch('http://localhost:4000/api/Imagenes/'+key, {
      method: 'GET', 
      headers:{'Content-Type': 'application/json' }, 
      body: JSON.stringify() 
     })
     .then(response => {return response.json()})
     .then(result =>{ setFileList(result.body)})
//     .then(result =>{ console.log('Resultado: ', result.body) })

    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    function actualizaDatos(data){
        setData(data)
    }

    const handleAdd = () => {
      setEditar(true);
      };
    
    
    const handleCancelar = () => { 
       form.resetFields();
       setEditar(false);
     }


     const handelOnChange = (e) => { 
          setBuscar(e.target.value)
      }
      
    const columns = [
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            render: (text) => moment(text).format('DD/MM/YYYY'),
            key: 'fecha',
        },
        {
          title: 'Ap.',
          dataIndex: 'ap',
          key: 'ap',
          ...getColumnSearchProps('ap'),
        },
        {
          title: 'Aat',
          dataIndex: 'aat',
          key: 'aat',
        },
        {
          title: 'Descripcion Fisica',
          dataIndex: 'desc_fisica',
          key: 'desc_fisica',
      },
      {
          title: 'Contenido segun oficio',
          dataIndex: 'cont_oficio',
          key: 'cont_oficio',
      },
      {
          title: 'Tipo Indicio',
          dataIndex: 'tipo_indicio',
          key: 'tipo_indicio',
          ...getColumnSearchProps('tipo_indicio'),
      },
      {
        title: 'Ubicacion',
        dataIndex: 'ubicacion',
        key: 'ubicacion',
      },
      {
        title: 'Unidad',
        dataIndex: 'unidad',
        key: 'unidad',
        filters: [
          {text: 'Desconocida',
           value: 'DESCONOCIDA', 
          },
          {text: 'Escondida',
            value: 'ESCONDIDA', 
           },
           {text: 'UEIDMS',
            value: 'UEIDMS', 
           },
           {text: 'FEITATA',
            value: 'FEITATA', 
           },
           {text: 'UEIORPIFAM',
            value: 'UEIORPIFAM', 
           },
           {text: 'UEITMPO',
            value: 'UEITMPO', 
           },
           {text: 'UEIARV',
            value: 'UEIARV', 
           },
        ],
        filterMode: 'tree',
        filterSearch: true,
        filterMultiple: true,
        onFilter: (value, record) => record.unidad.startsWith(value),
        defaultFilteredValue: true,
      },
      {
        title: 'Fotos',
        dataIndex: 'fotos',
        render: (_, record) =>
          (
            <>
      <Button type="primary" onClick={() => { showModal(record.id) } }>
        Imagenes
      </Button>
      <Modal title="Imagenes" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <>
      <Upload
        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
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
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
      </Modal>
    </>
          )     
        },        
    ]
    
    useEffect(() => { 
      fetch('http://localhost:4000/api/Indicios', {
        method: 'GET', 
        headers:{'Content-Type': 'application/json' }, 
        body: JSON.stringify() 
       })
       .then(response => 
        {return response.json()}
      )
      .then(result =>{ actualizaDatos(result.body)})  },[])

      const onFinish = (values) => {
//        console.log('Success:', values);
        const {password, password1} = values;
        if (password == password1){
          delete values.password1
          const dataNueva = {...values,id:0,activo: (values.activo ? '1':'0') }; 

          fetch('http://localhost:4000/api/Indicios',{
            method: 'POST', 
            headers:{'Content-Type': 'application/json' }, 
            body: JSON.stringify(dataNueva)
          })
          .then((response) => { response.json})
          .then((result) => { 
            data.push(dataNueva)
            setData(data)
            form.resetFields();
            setEditar(false);
          })

  
        }else{
           console.log('No coincide el password')
        }
      };

      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      
      const onChange = (pagination, filters, sorter, extra) => {
 //       console.log('params', pagination, filters, sorter, extra);
      };

      if (data.length === 0) {return}
      
      return (
      <div>
        <div hidden={editar}>
          <Table columns={columns} 
          key={data.id}
          bordered='true'
          dataSource={data}
          onChange={onChange}
          title={() => {
            return (
              <div>
                <Row>
                  <Col span={8}>
                    <h3>
                        Indicios
                    </h3>
                  </Col>
                </Row>
              </div>
            )}}        />
        </div>
      </div>
    )
 }

 export default IndiciosFilter
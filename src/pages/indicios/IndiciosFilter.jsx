
import { useEffect, useRef, useState } from 'react'
import {Button, Col, Input, Row, Space, Table} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import Modalj from './Modalj'
import TextArea from 'antd/es/input/TextArea';
import ModalObs from './ModalObs';
import ModalDoc from './ModalDoc';


var keyActual = 0;

const IndiciosFilter = () => {

    const [data, setData] = useState([]);
    const [imgList, setImgList] = useState([]);
    const [docList, setDocList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenObs, setIsModalOpenObs] = useState(false);
    const [isModalOpenDoc, setIsModalOpenDoc] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [registro, setRegistro] = useState({});
    const [obs, setObs] = useState('');
  
    useEffect(() => { 
      fetch('http://localhost:4000/api/Indicios', {
        method: 'GET', 
        headers:{'Content-Type': 'application/json' }, 
        body: JSON.stringify() 
       })
       .then(response => 
        {return response.json()}
      )
      .then(result =>{ actualizaDatos(result.body)})  },[isModalOpenObs])


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

  const showModal = (key) => {

    keyActual = key;
    fetch('http://localhost:4000/api/Imagenes/'+key, {
      method: 'GET', 
      headers:{'Content-Type': 'application/json' }, 
      body: JSON.stringify() 
     })
     .then(response => {return response.json()})
     .then(result =>{ setImgList(result.body)})
    setIsModalOpen(true);
  };

  const showModalDoc = (key) => {

    keyActual = key;
    fetch('http://localhost:4000/api/Documentos/'+key, {
      method: 'GET', 
      headers:{'Content-Type': 'application/json' }, 
      body: JSON.stringify() 
     })
     .then(response => {return response.json()})
     .then(result =>{ setDocList(result.body)})
    setIsModalOpenDoc(true);
  };


  const showModalObs = (key, observaciones, registro) => {

    keyActual = key;
    setObs(observaciones)
    setIsModalOpenObs(true);
    setRegistro(registro)
  };


    function actualizaDatos(data){
        setData(data)
    }

    const columns = [
      {
        title: "Fecha",
        dataIndex: "fecha",
        key: "fecha",
      },
      {
        title: "Ap.",
        dataIndex: "ap",
        key: "ap",
        ...getColumnSearchProps("ap"),
      },
      {
        title: "Aat",
        dataIndex: "aat",
        key: "aat",
      },
      {
        title: "Descripcion Fisica",
        dataIndex: "desc_fisica",
        key: "desc_fisica",
      },
      {
        title: "Contenido segun oficio",
        dataIndex: "cont_oficio",
        key: "cont_oficio",
      },
      {
        title: "Tipo Indicio",
        dataIndex: "tipo_indicio",
        key: "tipo_indicio",
        ...getColumnSearchProps("tipo_indicio"),
      },
      {
        title: "Ubicacion",
        dataIndex: "ubicacion",
        key: "ubicacion",
      },
      {
        title: "Unidad",
        dataIndex: "unidad",
        key: "unidad",
        filters: [
          { text: "Desconocida", value: "DESCONOCIDA" },
          { text: "Escondida", value: "ESCONDIDA" },
          { text: "UEIDMS", value: "UEIDMS" },
          { text: "FEITATA", value: "FEITATA" },
          { text: "UEIORPIFAM", value: "UEIORPIFAM" },
          { text: "UEITMPO", value: "UEITMPO" },
          { text: "UEIARV", value: "UEIARV" },
          { text: "UEIDCS", value: "UEIDCS" },
        ],
        filterMode: "tree",
        filterSearch: true,
        filterMultiple: true,
        onFilter: (value, record) => record.unidad.startsWith(value),
        defaultFilteredValue: true,
      },
      {
        title: "Observaciones",
        dataIndex: "observaciones",
        key: "observacioens",
        render: (_, record) => (
          <>
            <TextArea
              id = "TxtModalObsTabla"
              contentEditable = "false"
              onClick={() => {
                showModalObs(record.id, record.observaciones, record);
              }}
              
              value={record.observaciones}
            >
            </TextArea>

            <ModalObs isModalOpenObs ={isModalOpenObs} setIsModalOpenObs= {setIsModalOpenObs} obs = {obs} setObs = {setObs} objeto ={registro} setRegistro = {setRegistro} actualizaDatos = {actualizaDatos} />

          </>
        )
      },
      {
        title: "Fotos",
        dataIndex: "fotos",
        render: (_, record) => (
          <>
            <Button
              type="primary"
              onClick={() => {
                showModal(record.id);
              }}
            >
              Imagenes
            </Button>

            <Modalj keyActualP = {keyActual} isModalOpen ={isModalOpen} setIsModalOpen= {setIsModalOpen} fileList= {imgList} setFileList = {setImgList} />

          </>
        ),
      },
      {
        title: "Documentos",
        dataIndex: "documentos",
        render: (_, record) => (
          <>
            <Button
              type="primary"
              onClick={() => {
                showModalDoc(record.id);
              }}
            >
              Documentos
            </Button>

            <ModalDoc keyActualP = {keyActual} isModalOpenDoc ={isModalOpenDoc} setIsModalOpenDoc= {setIsModalOpenDoc} docList= {docList} setDocList = {setDocList} />

          </>
        ),
      },
    ];
    


      if (data.length === 0) {return}
      
      return (
      <div>
        <div>
          <Table columns={columns} 
          key={data.id}
          bordered='true'
          dataSource={data}
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
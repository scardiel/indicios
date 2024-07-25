
import { useEffect, useState } from 'react'
//import Datatable from 'react-data-table-component'
import {Button, Checkbox, Col, Form, Input, InputNumber, Popconfirm, Row, Space, Table} from 'antd'
import moment from 'moment';
import Search from 'antd/es/input/Search';


const Indicios = () => {

    const [data, setData] = useState([]);
    const [editar, setEditar] = useState(false);
    const [buscar, setBuscar] = useState('')
    const [form] = Form.useForm();

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
            filteredValue: [buscar],
        },
        {
          title: 'Ap.',
          dataIndex: 'ap',
          key: 'ap',
          filteredValue: [buscar],
          onFilter: (value, record) => { 
            return String(record.ap).toLowerCase().includes(value.toLowerCase()) ||
                   String(record.aat).toLowerCase().includes(value.toLowerCase()) ||
                   String(record.desc_fisica).toLowerCase().includes(value.toLowerCase()) ||
                   String(record.cont_oficio).toLowerCase().includes(value.toLowerCase()) ||
                   String(record.tipo_indicio).toLowerCase().includes(value.toLowerCase()) ||
                   String(record.ubicacion).toLowerCase().includes(value.toLowerCase()) ||
                   String(record.unidad).toLowerCase().includes(value.toLowerCase()) ||
                   String(moment(record.fecha).format('DD/MM/YYYY')).toLowerCase().includes(value.toLowerCase())
          }, 
        },
        {
          title: 'Aat',
          dataIndex: 'aat',
          key: 'aat',
          filteredValue: [buscar],
        },
        {
          title: 'Descripcion Fisica',
          dataIndex: 'desc_fisica',
          key: 'desc_fisica',
          filteredValue: [buscar],
      },
      {
          title: 'Contenido segun oficio',
          dataIndex: 'cont_oficio',
          key: 'cont_oficio',
          filteredValue: [buscar],
      },
      {
          title: 'Tipo Indicio',
          dataIndex: 'tipo_indicio',
          key: 'tipo_indicio',
          filteredValue: [buscar],
      },
      {
        title: 'Ubicacion',
        dataIndex: 'ubicacion',
        key: 'ubicacion',
        filteredValue: [buscar],
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
              
    ]
    
    useEffect(() => { fetch('http://localhost:4000/api/Indicios', {
        method: 'GET', 
        headers:{'Content-Type': 'application/json' }, 
        body: JSON.stringify() 
       })
       .then(response => 
        {return response.json()}
      )
      .then(result =>{ actualizaDatos(result.body)})  },[])

      const onFinish = (values) => {
        console.log('Success:', values);
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
        console.log('params', pagination, filters, sorter, extra);
      //console.log('params', extra.currentDataSource);
      //setData(extra.currentDataSource);

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
                  <Col span={8} offset={8}>
                    <Search placeholder="Texto a buscar ..." onChange={handelOnChange} value={buscar} enterButton />  
                  </Col>
                </Row>
              </div>
            )}}        />
        </div>
      </div>
    )
 }

 export default Indicios
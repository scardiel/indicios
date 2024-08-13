
import { useEffect, useState } from 'react'
//import Datatable from 'react-data-table-component'
import {Button, Checkbox, Form, Input, InputNumber, Popconfirm, Space, Table} from 'antd'


const CatUsuarios = () => {

    const [data, setData] = useState([{}]);
    const [editar, setEditar] = useState(false);
    const [form] = Form.useForm();

    function actualizaDatos(data){
        setData(data)
    }

    const handleAdd = () => {
      setEditar(true);
      };
    
    const handleDelete = (key) => {
        // console.log('Valordel ID: ', key);
        const data = {id: key}
        fetch('http://localhost:4000/api/usuarios',{
          method: 'DELETE', 
          headers:{'Content-Type': 'application/json' }, 
          body: JSON.stringify(data)
        })
        .then((response) => { response.json})
        .then((result) => { console.log('dato borrado correctamente') })

      };  
    
    const handleCancelar = () => { 
       form.resetFields();
       setEditar(false);
     }
      
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre'
        },
        {
          title: 'Ap. Paterno',
          dataIndex: 'apaterno',
          key: 'apaterno'
        },
        {
          title: 'Ap. Materno',
          dataIndex: 'amaterno',
          key: 'aMaterno'
        },
        {
          title: 'Correo',
          dataIndex: 'correo',
          key: 'correo'
      },
      {
        title: 'Perfil',
        dataIndex: 'perfil',
        key: 'perfil'    },
        {
          title: 'Usuario',
          dataIndex: 'usuario',
          key: 'usuario'    },
          {
            title: '',
            dataIndex: 'borrar',
            render: (_, record) =>
              (
                <Popconfirm title="Esta seguro?" onConfirm={() => handleDelete(record.id)}>
                  <a>Borrar</a>
                </Popconfirm>
              )     },    
    ]
    
    useEffect(() => { fetch('http://localhost:4000/api/usuarios', {
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

          fetch('http://localhost:4000/api/usuarios',{
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
      
    
    return (
      <div>
        <div hidden={!editar}>
          <h3>Nuevo usuario</h3>
          <Form
              form={form}
              name="usuarios"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                activo: 'checked',
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
          <Form.Item
              label="Nombre"
              name = 'nombre'
              rules={[
                {
                  required: true,
                  message: 'Ingrese su nombre!',
                },
              ]}
            >
            <Input/>
          </Form.Item>
          <Form.Item
              label="Ap. Paterno"
              name="apaterno"
              rules={[
                {
                  required: true,
                  message: 'Ingrese su Ap. Paterno!',
                },
              ]}
            >
            <Input />
          </Form.Item>
          <Form.Item
              label="Ap. Materno"
              name="amaterno"
              rules={[
                {
                  required: false,
                  message: 'Ingrese su Ap. Materno!',
                },
              ]}
            >
            <Input />
          </Form.Item>
          <Form.Item
              label="Correo"
              name="correo"
              rules={[
                {
                  required: false,
                  message: 'Ingrese su Correo!',
                },
              ]}
            >
            <Input />
          </Form.Item>
          <Form.Item
              label="Perfil"
              name="perfil"
              rules={[
                {
                  required: true,
                  message: 'Perfil',
                },
              ]}
            >
            <InputNumber />
          </Form.Item>
          <Form.Item
              label="Usuario"
              name="usuario"
              rules={[
                {
                  required: true,
                  message: 'Usuario',
                },
              ]}
            >
            <Input />
          </Form.Item>
          <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Contraseña',
                },
              ]}
            >
            <Input.Password />
          </Form.Item>
          <Form.Item
              label="Contraseña"
              name="password1"
              rules={[
                {
                  required: true,
                  message: 'Repita Contraseña',
                },
              ]}
            >
            <Input.Password />
          </Form.Item>

          <Form.Item
              name="activo"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
            <Checkbox >Activo</Checkbox>
          </Form.Item>

          <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
            <Space>
              <Button type="primary" htmlType="submit">
                Guardar
                </Button>

                <Button danger htmlType="submit" onClick={handleCancelar}>
                Cancelar
                </Button>
            </Space>  
          </Form.Item>

          </Form>
        </div>


        <div hidden={editar}>
          <Button onClick={handleAdd} type="primary" style={{marginBottom: 16,}}>Agregar</Button>
          <Table columns={columns} 
          key={data.id}
          bordered='true'
          dataSource={data}
          title={() => {
            return (
              <div>
                <h3>
                Catalogo de Usuarios
                </h3>
              </div>
            )}}        />
        </div>
      </div>
    )
 }

 export default CatUsuarios
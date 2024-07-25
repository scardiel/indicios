import { useEffect, useState } from "react";
import BotonIngresar from "../components/BotonIngresar";
import BotonLimpiar from "../components/BotonLimpiar";
import Password from "../components/Password";
import Usuario from "../components/Usuario";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";


const Login = () => {
    
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const {user, setUser} = useUserContext();

    const navigate = useNavigate()

    const usuarioSes = JSON.parse(sessionStorage.getItem('usuario'))

    useEffect(() => { 
        if(!user.login){
            navigate('/')
        }else{
            navigate('/menu')
        }
     },[user]);

    function handlerSubmit(e){
      e.preventDefault();
        const data = {
            'usuario': usuario,
            'password': password
        };
        fetch('http://localhost:4000/api/login', {
           method: 'POST', 
           headers:{'Content-Type': 'application/json' }, 
           body: JSON.stringify(data) 
          })
        .then(response => 
          {return response.json()}
        )
        .then(result =>{  
          if(result.error){
            navigate('/')
          }else{
            const unUsuario = {...user, login: true, token: result.body}
            setUser(unUsuario);
            sessionStorage.setItem('usuario',JSON.stringify({login: true, token: result.body}))
          }
        }
         )
         .catch((error) => { console.log(error) })
    }
    
    return (
        <div className="container text-center my-5">
          <div className="row justify-content-center">
            <div className="col-4 align-self-center">
                <div className="card align-items-center">
                  <h5 className="card-title">Inicio de sesion</h5>
                <div className='card-body'>
                <form>
                    <div className="container row">
                        <Usuario usuario={usuario} setUsuario = {setUsuario}/>
                        <Password password={password} setPassword={setPassword}/>
                    </div>
                    <div className="text-center my-5">
                      <BotonIngresar handlerSubmit = {handlerSubmit}/>
                      <BotonLimpiar setUsuario = {setUsuario} setPassword={setPassword}/>
                    </div>
                  </form>
                </div>  
                </div>
            </div>
          </div>
        </div>
      );
 }

 export default Login
 
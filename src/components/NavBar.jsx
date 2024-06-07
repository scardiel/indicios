import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import {} from "react";

const NavBar = () => {

  const {user, setUser} = useUserContext();
  const navigate = useNavigate();

  function logout(){
       const unUsuario = {...user, login: false,token: ''}
       setUser(unUsuario);
       console.log('Usuario: ', unUsuario);
       navigate('/')
  }


  if(user.login){
    return (
      <div className="my-3">
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/menu'>Plataforma</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to='/menu/capturaOrden'>Captura Orden</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/menu/inventario'>Inventario</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catalogos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to='/menu/cat/catClientes'>Catálogo Clientes</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to='/menu/cat/catSucursales'>Catálogo Sucursales</Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <Link className="dropdown-item" to='/menu/cat/catUsuarios'>Catálogo Usuarios</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <button type="button" className="btn btn-danger align-items-end" onClick={logout}>Salir</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar;

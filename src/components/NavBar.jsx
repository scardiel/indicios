import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="my-3">
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>DistribuidOptica</Link>
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
                <Link className="nav-link active" to='/capturaOrden'>Captura Orden</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/inventario'>Inventario</Link>
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
                    <Link className="dropdown-item" to='/cat/catClientes'>Catálogo Clientes</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/cat/catSucursales'>Catálogo Sucursales</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/cat/catUsuarios'>Catálogo Usuarios</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import {Link} from 'react-router-dom'
const Sidebar = ({mostrarSidebar,guardarMostrarSidebar}) => {
  
  const classSidebar = (mostrarSidebar) ? 'sidebar-toggle' : '' 
    
      const handleMostrarSidebar = () => {
        guardarMostrarSidebar(false);
      }

      return ( 
        <div className= {`sidebar d-flex flex-column align-items-center ${classSidebar}`}>
            <button 
                type="button" 
                className="mt-5 btn btn-purple"
                onClick={() => handleMostrarSidebar()}
            >
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>

            </button>
            <ul className="list-unstyled w-100">
              <li className="text-center mx-2 py-1">
                <Link className="nav-item nav-link text-white" to="/paises" onClick={() => handleMostrarSidebar()}>Paises</Link>
                </li>
              <li className="text-center mx-2 py-1">
                <Link className="nav-item nav-link text-white" to="/ciudades" onClick={() => handleMostrarSidebar()}>Ciudades</Link>
                </li>
              <li className="text-center mx-2 py-1">
                <Link className="nav-item nav-link text-white" to="/empresas" onClick={() => handleMostrarSidebar()}>Empresas</Link>
                </li>
              <li className="text-center mx-2 py-1">
                <Link className="nav-item nav-link text-white" to="/puestos" onClick={() => handleMostrarSidebar()}>Puestos</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;

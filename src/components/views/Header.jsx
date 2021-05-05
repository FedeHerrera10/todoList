import {Link} from 'react-router-dom'
const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            <Link to="/" className="navbar-brand">Puestos APP</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/paises">Paises</Link>
                        <Link className="nav-item nav-link" to="/ciudades">Ciudades</Link>
                        <Link className="nav-item nav-link" to="/empresas">Empresas</Link>
                        <Link className="nav-item nav-link" to="/puestos">Puestos</Link>
                    </div>
                </div>
        </nav>
    );
}
 
export default Header;


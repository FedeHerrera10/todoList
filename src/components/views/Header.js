import React ,{useState} from 'react';
import { Fragment } from 'react';
import Sidebar from './Sidebar';
const Header = () => {
    const [mostrarSidebar, guardarMostrarSidebar] = useState(false);

    const handleClick = () => {
        const mostrar = mostrarSidebar ? false : true;
        guardarMostrarSidebar(mostrar);
        
    }

    return (
        <Fragment>
            <Sidebar
            mostrarSidebar={mostrarSidebar}
            guardarMostrarSidebar={guardarMostrarSidebar}
            />
        <div className="w-100 pt-3 pb-3 header d-flex align-items-center">
            <button 
                type="button" 
                className="btn btn-purple mx-5"
                onClick={() => handleClick()}
            >
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </button>
        </div>
        
        
            
        
        </Fragment> 
    );
}
 
export default Header;


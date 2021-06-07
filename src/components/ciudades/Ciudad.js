import React,{Fragment,useContext} from 'react';
import CiudadContext from '../../context/ciudades/ciudadesContext'

const Ciudad = ({ciudad,pais}) => {
    
    const{seleccionarCiudad,obtenerCiudades,eliminarCiudad} = useContext(CiudadContext);
    
    const handleEliminarCiudad = id => {
        eliminarCiudad(id);
        obtenerCiudades();
    }

    const handleEditar = ciudad => {
        seleccionarCiudad(ciudad);
    }

        

    return ( 
        <Fragment>
                <tr key={ciudad.id}>
                    <td className="text-center py-2">{(pais === null) ?'Pais no encontrado':pais[0].nombre }</td>
                    <td className="text-center py-2">{ciudad.nombre}</td>
                    <td className="text-center py-2">
                        <button 
                            className="btn btn-danger mr-2" 
                            onClick={()=>handleEliminarCiudad(ciudad.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                        <button 
                            className="btn btn-success"
                            onClick={()=>handleEditar(ciudad)}
                        >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>

        </Fragment>
           
     );
}
 
export default Ciudad;
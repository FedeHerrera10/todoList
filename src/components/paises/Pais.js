import React,{Fragment,useContext} from 'react';
import PaisesContext from '../../context/paises/paisesContext'
const Pais = ({pais}) => {
    const {obtenerPaises,eliminarPais,seleccionarPais,obtenerPais} = useContext(PaisesContext);
    
    const handleEliminarPais = id => {
        eliminarPais(id);
        obtenerPaises();
    }

    const handleEditar = pais => {
        seleccionarPais(pais);
    }

    return ( 
        <Fragment>
            {console.log(obtenerPais(pais.id))}
                <tr key={pais.id}>
                    <td className="text-center py-2">{pais.codigo}</td>
                    <td className="text-center py-2">{pais.nombre}</td>
                    <td className="text-center py-2">
                        <button 
                            className="btn btn-danger mr-2" 
                            onClick={()=>handleEliminarPais(pais.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                        <button 
                            className="btn btn-success"
                            onClick={()=>handleEditar(pais)}
                        >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>

        </Fragment>
           
     );
}
 
export default Pais;
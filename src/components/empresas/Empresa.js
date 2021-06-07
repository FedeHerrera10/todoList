import React,{Fragment, useContext} from 'react';
import CiudadesContext from '../../context/ciudades/ciudadesContext';
import EmpresasContext from '../../context/empresa/empresasContext';
import PaisesContext from '../../context/paises/paisesContext';

const Empresa = ({empresa}) => {
    
    const{eliminarEmpresa,obtenerEmpresas,seleccionarEmpresa} = useContext(EmpresasContext)
    const{obtenerPais} = useContext(PaisesContext);
    const{obtenerCiudad} = useContext(CiudadesContext);
    const {pais,ciudad} = empresa;
    
    const handleEliminarEmperesa = id => {
        eliminarEmpresa(id);
        obtenerEmpresas();
    }

    const handleEditar = empresa => {
        seleccionarEmpresa(empresa);
    }

    const empresaPais = () => {
        const paisObtenido = obtenerPais(pais);
        return (paisObtenido !== null) ? paisObtenido.nombre : '';
    }
    
    const empresaCiudad = () => {
        const ciudadObtenido = obtenerCiudad(ciudad);
        return (ciudadObtenido !== null) ? ciudadObtenido.nombre : '';
    }

    return (
        <Fragment>
            
        <tr key={empresa.id}>
        <td key = {empresa.pais} className="text-center py-2">{empresaPais()}</td>
        <td className="text-center py-2">{empresaCiudad()}</td>
            
            <td className="text-center py-2">{empresa.nombre}</td>
            <td className="text-center py-2">
                <button 
                    className="btn btn-danger mr-2" 
                    onClick={()=>handleEliminarEmperesa(empresa.id)}
                >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
                <button 
                    className="btn btn-success"
                    onClick={()=>handleEditar(empresa)}
                >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
            </td>
        </tr>

</Fragment>

    )

}
 
export default Empresa;
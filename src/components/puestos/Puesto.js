import React,{Fragment,useContext,useEffect, useState} from 'react';
import PaisesContext from '../../context/paises/paisesContext'
import PuestosContext from '../../context/puestos/puestosContext';
import EmpresasContext from '../../context/empresa/empresasContext';
import CiudadesContext from '../../context/ciudades/ciudadesContext';

const Puesto = ({puesto}) => {
    //const {obtenerPaises,eliminarPais,seleccionarPais,obtenerPais} = useContext(PaisesContext);
    const{eliminarPuesto,obtenerPuestos,seleccionarPuesto}= useContext(PuestosContext)
    const{obtenerEmpresa,obtenerEmpresas} = useContext(EmpresasContext)
    const{obtenerPais,obtenerPaises} = useContext(PaisesContext);
    const{obtenerCiudad,obtenerCiudades} = useContext(CiudadesContext);
    
    const [objEmpresa,guardarEmpresa] = useState({})
    const [objPais,guardarPais] = useState({})
    const [objCiudad,guardarCiudad] = useState({})
    
    const{empresa} = puesto;
    
    useEffect(  () => {
        obtenerPaises();
        obtenerEmpresas();
        obtenerCiudades();
        const resEmpresa =  obtenerEmpresa(empresa)
            const empresaObtenida=(resEmpresa !== null) ? resEmpresa : {};
            guardarEmpresa(empresaObtenida);
            console.log(empresaObtenida)
    }, [puesto])


    useEffect(async ()=>{
        if(Object.keys(objEmpresa).length > 0){
            const resPais = await obtenerPais(objEmpresa.pais)
            const paisObtenido=(resPais !== null) ? resPais : {};
            guardarPais(paisObtenido)
            const resCiudad = await obtenerCiudad(objEmpresa.ciudad)
            const ciudadObtenida=(resCiudad !== null) ? resCiudad : {};
            guardarCiudad(ciudadObtenida)
        }
    },[objEmpresa])

    const handleEliminarPuesto = id => {
        eliminarPuesto(id);
        obtenerPuestos();
    }

    const handleEditar = puesto => {
        seleccionarPuesto(puesto);
    }

    
    return ( 
        <Fragment>
                <tr key={puesto.id}>
                    <td className="text-center py-2">{puesto.cargo}</td>
                    <td className="text-center py-2">{objEmpresa.nombre || ''}</td>
                    <td className="text-center py-2">{objPais.nombre || ''}</td>
                    <td className="text-center py-2">{objCiudad.nombre || ''}</td>
                    
                    <td className="text-center py-2">
                        <button 
                            className="btn btn-danger mr-2" 
                            onClick={()=>handleEliminarPuesto(puesto.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                        <button 
                            className="btn btn-success"
                            onClick={()=>handleEditar(puesto)}
                        >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>

        </Fragment>
           
     );
}
 
export default Puesto;
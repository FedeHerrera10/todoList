import React, { useContext, useEffect } from 'react';
import EmpresasContext from '../../context/empresa/empresasContext'
const SelectEmpresas = ({value,onChange}) => {
    
    const{empresas,obtenerEmpresas} = useContext(EmpresasContext)
    
    useEffect(() => {
        obtenerEmpresas();
        // eslint-disable-next-line
    },[])

    return ( 
        
        <select className="custom-select mb-3" 
            name="empresa" 
            onChange={onChange}
            value={value}
            >
        <option value="">Seleccione una empresa</option>
        {empresas.map(empresa => (
            <option key={empresa.id} value={empresa.id} >{empresa.nombre}</option>
        ))}
      </select>

     );
}
 
export default SelectEmpresas;
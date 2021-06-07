import React, { useContext, useEffect } from 'react';
import PaisesContext from '../../context/paises/paisesContext'
const SelectPaises = ({value,onChange}) => {
    
    const{paises,obtenerPaises} = useContext(PaisesContext);
    
    useEffect(() => {
        obtenerPaises();
        // eslint-disable-next-line
    },[])

    return ( 
        
        <select className="custom-select mb-3" 
            name="pais" 
            onChange={onChange}
            value={value}
            >
        <option value="">Seleccione un pais</option>
        {paises.map(pais => (
            <option key={pais.id} value={pais.id} >{pais.nombre}</option>
        ))}
      </select>

     );
}
 
export default SelectPaises;
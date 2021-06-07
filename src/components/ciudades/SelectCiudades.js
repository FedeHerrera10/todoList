import React, { useContext, useEffect, useState } from 'react';
import CiudadesContext from '../../context/ciudades/ciudadesContext'
const SelectCiudades = ({value,onChange,paisActual}) => {
    
    const{ciudades,obtenerCiudades} = useContext(CiudadesContext);
    const [options,guardarOpttions] = useState([])
    
    useEffect(() => {
        obtenerCiudades()
        // eslint-disable-next-line
    },[])
    let optionses=[];
    
    useEffect(() => {
        // eslint-disable-next-line
        optionses=ciudades.map(ciudad => (
            (ciudad.pais === paisActual) ? <option key={ciudad.id} value={ciudad.id} >{ciudad.nombre}</option> : null
        ))
        guardarOpttions(optionses)
    },[paisActual])

    return ( 
        
        <select className="custom-select mb-3" 
            name="ciudad" 
            onChange={onChange}
            value={value}
            >
        <option value="">Seleccione una ciudad</option>
        {
            options.map(option => (option))
        }
        
      </select>

     );
}
 
export default SelectCiudades;
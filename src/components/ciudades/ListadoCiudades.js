import React, { useContext, useEffect } from 'react';
import CiudadesContext from '../../context/ciudades/ciudadesContext';
import PaisesContext from '../../context/paises/paisesContext';

import Mensaje from '../utils/Mensaje';
import Ciudad from './Ciudad';
const ListadoCiudades = () => {

    const {ciudades,obtenerCiudades} = useContext(CiudadesContext);
    const {paises,obtenerPaises} = useContext(PaisesContext);
    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerCiudades();
        obtenerPaises();
        //eslint-disable-next-line
    },[])

    const obtenerPaisesParaCiudad = (id) => {
        const pais = paises.filter(pais => (pais.id === id))
        if(pais.length === 0 ) return null;
        return pais;
    }

    if (ciudades.length === 0) return  <Mensaje tipo="danger" mensaje="No hay registros" time={0}/>;
    
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                <table  className="table table-striped table-bordered mb-5">
                    <thead className="thea">
                        <tr>
                            <th scope="col" className="text-center py-2">Pais</th>
                            <th scope="col" className="text-center py-2">Nombre</th>
                            <th scope="col" className="text-center py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {ciudades.map(ciudad => (
                        
                        <Ciudad
                            key={ciudad.id}
                            ciudad={ciudad}
                            pais = { obtenerPaisesParaCiudad(ciudad.pais)}
                       />
                        )
                    )}
                     </tbody>
                </table>
                </div>
            </div>
        </div>
     );
}
 
export default ListadoCiudades;
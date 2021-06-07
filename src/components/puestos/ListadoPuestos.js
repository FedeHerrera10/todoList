import React, { useContext, useEffect } from 'react';
import PuestosContext from '../../context/puestos/puestosContext';
import Mensaje from '../utils/Mensaje';
import Puesto from './Puesto'
const ListadoPuestos = () => {

    const{puestos,obtenerPuestos} = useContext(PuestosContext)

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerPuestos();
        //eslint-disable-next-line
    },[])
   
    if (puestos.length === 0) return  <Mensaje tipo="danger" mensaje="No hay registros" time={0}/>;
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                <table  className="table table-striped table-bordered mb-5">
                    <thead className="thead">
                        <tr>
                            <th scope="col" className="text-center py-2">Puesto</th>
                            <th scope="col" className="text-center py-2">Empresa</th>
                            <th scope="col" className="text-center py-2">Pais</th>
                            <th scope="col" className="text-center py-2">Ciudad</th>
                            <th scope="col" className="text-center py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {puestos.map(puesto => (
                        
                        <Puesto
                            key={puesto.id}
                            puesto={puesto}
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
 
export default ListadoPuestos;
import React, { useContext, useEffect } from 'react';
import PaisesContext from '../../context/paises/paisesContext'
import Mensaje from '../utils/Mensaje';
import Pais from './Pais'
const ListadoPaises = () => {

    const {paises,obtenerPaises} = useContext(PaisesContext);

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerPaises();
        //eslint-disable-next-line
    },[])
   
    if (paises.length === 0) return  <Mensaje tipo="danger" mensaje="No hay registros" time={0}/>;
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                <table  className="table table-striped table-bordered mb-5">
                    <thead className="thea">
                        <tr>
                            <th scope="col" className="text-center py-2">Codigo</th>
                            <th scope="col" className="text-center py-2">Nombre</th>
                            <th scope="col" className="text-center py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {paises.map(pais => (
                        <Pais
                            key={pais.id}
                            pais={pais}
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
 
export default ListadoPaises;
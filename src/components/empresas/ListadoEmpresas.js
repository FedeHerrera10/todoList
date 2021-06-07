import React,{useContext,useEffect} from 'react';
import Mensaje from '../utils/Mensaje';
import EmpresasContext from '../../context/empresa/empresasContext';
import Empresa from './Empresa';

    const ListadoEmpresas = () => {
        const {empresas,obtenerEmpresas} = useContext(EmpresasContext);
        // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerEmpresas();
        
        //eslint-disable-next-line
    },[])

    if (empresas.length === 0) return  <Mensaje tipo="danger" mensaje="No hay registros" time={0}/>;
    
    return ( 
        <div className="container">
        <div className="row">
            <div className="col-12">
            <table  className="table table-striped table-bordered mb-5">
                <thead className="thea">
                    <tr>
                        <th scope="col" className="text-center py-2">Pais</th>
                        <th scope="col" className="text-center py-2">Ciudad</th>
                        <th scope="col" className="text-center py-2">Nombre</th>
                        <th scope="col" className="text-center py-2"></th>
                    </tr>
                </thead>
                <tbody>
                {empresas.map(empresa => (
                        
                        <Empresa
                            key={empresa.id}
                            empresa={empresa}
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
 
export default ListadoEmpresas;

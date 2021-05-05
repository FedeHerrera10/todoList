import React, { Fragment } from 'react';
import Mensaje from '../utils/Mensaje';
import {filterEqualData} from '../API'
const ListJobs = ({jobs,deleteJob}) => {
    

     const deleteJobParent=(e) => {
        const id = Number(e.target.dataset.id);
        deleteJob(id);
    } 

    const filterBusiness = (IdBusiness) => {
        let name='---';
        let result = filterEqualData('business',IdBusiness)
        if(Object.keys(result[0]).length >0 ) name = result[0].name;
        let resultCity = filterEqualData('cities',result[0].city)
        let resultCountry = filterEqualData('countries',result[0].country)
        return (
                <Fragment><td className="text-center py-2">{name}</td>
                <td className="text-center py-2">{resultCity[0].name || '--'}</td>
                <td className="text-center py-2">{resultCountry[0].name || '--'}</td>
                </Fragment>
        )
    }


    
    return (
        <Fragment>
        {(jobs.length === 0 ) 
                ? <Mensaje tipo="danger" mensaje="No hay registros" time={0}/>
                : 
                <Fragment>
                    <table  className="table mb-5">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col" className="text-center py-2">Puesto</th>
                                <th scope="col" className="text-center py-2">Empresa</th>
                                <th scope="col" className="text-center py-2">Ciudad</th>
                                <th scope="col" className="text-center py-2">Pais</th>
                                <th scope="col" className="text-center py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { jobs.map((job) => {
                                return (
                                    <tr key={job.id}>
                                        <td className="text-center py-2">{job.job}</td>
                                         {filterBusiness(job.business)}
                                        
                                        
                                        <td className="text-center py-2">
                                            <button 
                                                    data-id={job.id} 
                                                    className="btn btn-danger" 
                                                    onClick={deleteJobParent}>
                                                        Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                        
              </Fragment>
            }

        </Fragment>
        )
    
}

export default ListJobs;
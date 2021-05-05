import React, { Fragment } from 'react';
import Mensaje from '../utils/Mensaje';
import {filterEqualData} from '../API';



const ListBusiness = ({businessArr,deleteBusinessParent}) =>{

    const deleteBusiness = (e) => {
        const id = Number(e.target.dataset.id);
        deleteBusinessParent(id);
    }

    const filterCountry = (IdCountry) => {
        let name='---';
        let result = filterEqualData('countries',IdCountry)
        if(Object.keys(result[0]).length >0 ) name = result[0].name;
        return name;
    }

    const filterCity = (IdCity) => {
        let name='---';
        let result = filterEqualData('cities',IdCity)
        if(Object.keys(result[0]).length >0 ) name = result[0].name;
        return name;
    }

    return(
        <Fragment>
            {(businessArr.length === 0 ) 
                    ? <Mensaje tipo="danger" mensaje="No hay registros" time={0}/>
                    : 
                    <Fragment>
                        <table  className="table mb-5">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center py-2">Empresa</th>
                                    <th scope="col" className="text-center py-2">Ciudad</th>
                                    <th scope="col" className="text-center py-2">Pais</th>
                                    <th scope="col" className="text-center py-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                { businessArr.map((business) => {
                                    return (
                                        <tr key={business.id}>
                                            <td className="text-center py-2">{business.name}</td>
                                            <td className="text-center py-2">{filterCity(business.city)}</td>
                                            
                                            <td className="text-center py-2">{filterCountry(business.country)}</td>
                                            <td className="text-center py-2">
                                                <button 
                                                        data-id={business.id} 
                                                        className="btn btn-danger" 
                                                        onClick={deleteBusiness}>
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

export default ListBusiness;
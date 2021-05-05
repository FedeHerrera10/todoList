import React, { Fragment } from 'react';
import Mensaje from '../utils/Mensaje';

const ListCountries = ({countries,deleteCountry}) =>{
    
    /*-- Funcion que se llama cuando se presiona el btn eliminar --*/
    const deleteCountryParent = (e) => {
        const id = Number(e.target.dataset.id);
        deleteCountry(id);
    }
    
    return (
            <Fragment>
                {(countries.length === 0 ) 
                    ? <Mensaje tipo="danger" mensaje="No hay registros" time={0}/>
                    : <Fragment>
                            <table  className="table mb-5">
                                <thead className="thead-dark">
                               <tr>
                                    <th scope="col" className="text-center py-2">Codigo</th>
                                    <th scope="col" className="text-center py-2">Nombre</th>
                                    <th scope="col" className="text-center py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                { countries.map((country) => {
                                    return (
                                        <tr key={country.id}>
                                            <td className="text-center py-2">{country.code}</td>
                                            <td className="text-center py-2">{country.name}</td>
                                            <td className="text-center py-2">
                                                <button 
                                                        data-id={country.id} 
                                                        className="btn btn-danger" 
                                                        onClick={deleteCountryParent}>
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

export default ListCountries;
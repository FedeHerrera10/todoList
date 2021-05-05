import React, { Fragment, useState,useEffect } from 'react';
import Mensaje from './utils/Mensaje';
import Spiner from './Spinner';
import ListCities from './views/ListCities'
import {insertarDatosLocalStorage,obtenerDatosLocalStorage,filterData} from './API';

const Ciudades = () => {
    
    const getInitialObj = () => (
        {
            id:Date.now(),
            country:'',
            name:''
        }
    )

    const[objCity,saveCity] = useState(getInitialObj);
    const[error,saveError] = useState(false);
    const[loading,saveLoading] = useState(false);
    const[cities,saveCities]= useState(obtenerDatosLocalStorage('cities'));
    
    let countries=obtenerDatosLocalStorage('countries');
    
    useEffect(()=> {
        const writeCities = () =>{
            setTimeout(() => {
                insertarDatosLocalStorage('cities',cities)
                saveLoading(false)
                saveCity(getInitialObj)
            }, 2000);
        }
        writeCities();

    },[cities])

    
    const actualizaState=(e) => {
        saveError(false);
        saveCity({...objCity,[e.target.name] :e.target.value})
    }

    /* -- Funcion que agrega un pais y lo escribe en LS */
    const{country,name}= objCity;
    
    const addCity = (e) => {
       e.preventDefault();
    
       if(country.trim() === '' || name.trim() === ''){
           saveError(true);
           return;
       }
       saveLoading(true);
       saveCities([...cities,objCity]);
    }

    /*--Elimina una ciudad y escribe LS */
    const deleteCity = (IdCity) =>{
        saveLoading(true);
        const result = filterData('cities',IdCity);
       saveCities(result);
    }


        return (
            <Fragment>
               <h3 className="text-center text-underline mt-5 mb-5">Administrador de Ciudades</h3>
               <div className="container-fluid">
                   <div className="row ml-0 ml-lg-5">
                       <div className="col-12 col-md-5  col-lg-6">
                           <form
                               onSubmit={addCity}
                           >
                               <div className="row">
                                   <div className="col-12">
                                       <label htmlFor="pais" >Pais</label>
                                       <select 
                                            className="custom-select" 
                                            id="country"
                                            name="country"
                                            value={country}
                                            onChange={actualizaState}
                                            >
                                          <option value="">--Seleccionar Pais --</option>
                                          {countries.map((country,index) => (
                                            <option key={index} value={Number(country.id)} >{country.name}</option>
                                          ))}
                                        </select>
                                   </div>
                                   <div className="col">
                                       <label htmlFor="descripcion" className="mt-4" >Nombre de ciudad</label>
                                       <input 
                                           type="text" 
                                           id="name" 
                                           name="name"
                                           className="form-control" 
                                           placeholder="Ingrese el código el nombre del pais"
                                           onChange={actualizaState}
                                           value={name}
                                       />
                                   </div>
                               </div>
                               <button 
                                   type="submit" 
                                   className="btn btn-primary mt-4"
                               >
                                   Añadir Ciudad
                               </button>
                               {(error) 
                                    ? <Mensaje tipo="danger" mensaje="Todos los campos son obligatorios" time={3}/>: null
                               }
                           </form>
                       </div>
                       <div className="col-12 mt-5 col-md-7 mt-md-0 col-lg-6 ">
                           {(loading) 
                               ?  <Spiner/>
                               :  <div className="container">
                                       <div className="row">
                                           <div className="col-12">
                                               { <ListCities
                                                   cities={cities}
                                                   countries={countries}
                                                   deleteCity={deleteCity}
                                               /> }
                                           </div>
                                       </div>
                                   </div>
                           }
                       </div>
                   </div>
               </div>
           </Fragment>
       )
    

}

export default Ciudades;
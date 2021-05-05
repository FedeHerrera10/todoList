import React,{Fragment, useEffect, useState} from 'react';
import Mensaje from './utils/Mensaje';
import Spiner from './Spinner';
import {insertarDatosLocalStorage,obtenerDatosLocalStorage,filterData} from './API';
import ListBusiness from './views/ListBusiness';

const Business = () =>{

    const  getInitialObj = () => ({
        id:Date.now(),
        country:'',
        city:'',
        name:''
    })
    
    let countries = obtenerDatosLocalStorage('countries');
    let citiesArr = obtenerDatosLocalStorage('cities');

    const [objBusiness, saveBusiness] = useState(getInitialObj);
    const [business, saveBusinessArr] = useState(obtenerDatosLocalStorage('business'));
    const [cities, updateCities] = useState([]);
    const [error,saveError] = useState(false);
    const [loading,saveLoading] = useState(false);
    const{country,city,name} = objBusiness;
    
    useEffect(()=>{
        if(objBusiness.country==='') return;
         const filterCities = () => {
            const filterCities =citiesArr.filter(city => Number(city.country) === Number(country));
            updateCities(filterCities);
            saveBusiness({...objBusiness,[city] :''})
         }
        filterCities();
    },[objBusiness.country])
    
    useEffect(()=>{
        
        const writeBusiness = () =>{
            setTimeout(() => {
                insertarDatosLocalStorage('business',business)
                saveLoading(false)
                saveBusiness(getInitialObj)
            }, 2000);
        }
        writeBusiness();
    },[business])


    /* Actualiza el objBusiness(empresa) en el componente */
    const updateState = (e) => {
        saveError(false);
        saveBusiness({...objBusiness,[e.target.name] :e.target.value})
    }

    const addBusiness = (e) => {
        e.preventDefault();
        
        if(country.trim() === '' || name.trim() === '' || city.trim() === ''){
            saveError(true);
            return;
        }
        saveLoading(true);
        saveBusinessArr([...business,objBusiness]);
    }

    /*--Elimina una empresa  y escribe LS */
    const deleteBusiness = (IdBusiness) =>{
       saveLoading(true);
       const result = filterData('business',IdBusiness);
       saveBusinessArr(result);
    }


    return (
            <Fragment>
               <h3 className="text-center text-underline mt-5 mb-5">Administrador de Empresas</h3>
               <div className="container-fluid">
                   <div className="row ml-0 ml-lg-5">
                       <div className="col-12 col-md-5  col-lg-6">
                           <form
                              onSubmit={addBusiness} 
                           >    
                                <div className="row">
                               
                               <div className="col-12">
                                       <label htmlFor="name" className="mt-4" >Nombre de la empresa</label>
                                       <input 
                                           type="text" 
                                           id="name" 
                                           name="name"
                                           className="form-control" 
                                           placeholder="Ingrese el nombre del pais"
                                           onChange={updateState}
                                            value={name}
                                       />
                                   </div>
                                   <div className="col-12">

                                       <label htmlFor="country" >Pais</label>
                                       <select 
                                            className="custom-select" 
                                            id="country"
                                            name="country"
                                            onChange={updateState}
                                            value={country}
                                            >
                                           <option value="">--Seleccionar Pais --</option>
                                           {countries.map((country,index) => (
                                            <option key={index} value={Number(country.id)} >{country.name}</option>
                                          ))}
                                        </select>
                                   </div>
                                   <div className="col-12">
                                       <label htmlFor="city" >Ciudad</label>
                                       <select 
                                            className="custom-select" 
                                            id="city"
                                            name="city"
                                            value={city}
                                            onChange={updateState}
                                            >
                                            <option value="">--Seleccionar Ciudad --</option>
                                          { cities.map((city,index) => (
                                            <option key={index} value={Number(city.id)} >{city.name}</option>
                                          ))}
                                        </select>
                                   </div>
                               </div>
                               <button 
                                   type="submit" 
                                   className="btn btn-primary mt-4"
                               >
                                   Añadir Empresa
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
                                               <ListBusiness
                                               businessArr = {business}
                                               deleteBusinessParent={deleteBusiness}
                                               />
                                           </div>
                                       </div>
                                   </div>
                           }
                       </div>
                   </div>
               </div>
           </Fragment>
        );
      }
    

export default Business;

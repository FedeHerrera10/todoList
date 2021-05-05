import React, { Fragment,useEffect,useState } from 'react';
import ListCountries from './views/ListCountries';
import Mensaje from './utils/Mensaje';
import Spiner from './Spinner';
import {insertarDatosLocalStorage,obtenerDatosLocalStorage,filterData} from './API';
const Country = () => {

    const  getInitialObj = () => ({
        id:Date.now(),
        code:'',
        name:''
    })
    
    const[objCountry,saveCountry] = useState(getInitialObj);
    const[countries,saveCountries]= useState(obtenerDatosLocalStorage('countries'));
    const[error,saveError] = useState(false);
    const[loading,saveLoading] = useState(false);
    
    useEffect(()=>{
        
        const writeCountries = () =>{
            setTimeout(() => {
                insertarDatosLocalStorage('countries',countries)
                saveLoading(false)
                saveCountry(getInitialObj)
            }, 2000);
        }
        writeCountries();
    },[countries])
    
    /* Actualiza el objCountry(pais) en el componente */
    const updateState = (e) => {
        saveError(false);
        saveCountry({...objCountry,[e.target.name] :e.target.value})
    }
    
    /* -- Funcion que agrega un pais y lo escribe en LS */
     const{code,name}= objCountry;

     const addCountry = (e) => {
        e.preventDefault();
        
        if(code.trim() === '' || name.trim() === ''){
            saveError(true);
            return;
        }
        saveLoading(true);
        saveCountries([...countries,objCountry]);
    }

     /*--Elimina un pais y escribe LS */
     const deleteCountry = (paisId) =>{
         saveLoading(true); 
        const result = filterData('countries',paisId);
        saveCountries(result);
     }

    return (  
        <Fragment>
                <h3 className="text-center text-underline mt-5 mb-5">Administrador de Paises</h3>
                <div className="container-fluid">
                    <div className="row ml-0 ml-lg-5">
                        <div className="col-12 col-md-5  col-lg-6">
                            <form
                                onSubmit={addCountry}
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="codigo" >Código de pais</label>
                                        <input 
                                            type="text" 
                                            id="code" 
                                            name="code"
                                            className="form-control" 
                                            placeholder="Ingrese el código del pais"
                                            onChange={updateState}
                                            value={code}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="descripcion" className="mt-4" >Nombre de pais</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            className="form-control" 
                                            placeholder="Ingrese el código el nombre del pais"
                                            onChange={updateState}
                                            value={name}
                                        />
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary mt-4"
                                >
                                    Añadir Pais
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
                                                <ListCountries 
                                                    countries ={countries}
                                                    deleteCountry={deleteCountry}
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
 
export default Country;
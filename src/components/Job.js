import React,{Fragment,useState,useEffect} from 'react';
import Spiner from './Spinner';
import Mensaje from './utils/Mensaje';
import ListJobs from './views/ListJobs'
import {obtenerDatosLocalStorage,insertarDatosLocalStorage,filterData} from './API'


const Job = () =>{

    const  getInitialObj = () => ({
        id:Date.now(),
        job:'',
        business:'',
    })
    

    const [objJob, saveJob] = useState(getInitialObj);
    const [jobs, saveJobs] = useState(obtenerDatosLocalStorage('jobs'));
    const [error,saveError] = useState(false);
    const [loading,saveLoading] = useState(false);
    
    let businessArr = obtenerDatosLocalStorage('business');

    useEffect(()=>{
        
        const writeJob = () =>{
            setTimeout(() => {
                insertarDatosLocalStorage('jobs',jobs)
                saveLoading(false)
                saveJob(getInitialObj)
            }, 2000);
        }
        writeJob();
    },[jobs])

    /* Actualiza el objJob(puesto) en el componente */
    const updateState = (e) => {
        saveError(false);
        saveJob({...objJob,[e.target.name] :e.target.value})
    }

    const {job,business} = objJob;
    const addJob = (e) => {
        e.preventDefault();
        
        if(job.trim() === '' || business.trim() === ''){
            saveError(true);
            return;
        }
        saveLoading(true);
        saveJobs([...jobs,objJob]);
    }

    /*--Elimina un job y escribe LS */
     const deleteJob = (IdJob) =>{
       saveLoading(true);
       const result = filterData('jobs',IdJob);
       saveJobs(result);
    } 


    
    return(

        <Fragment>
        <h3 className="text-center text-underline mt-5 mb-5">Administrador de Puestos de Trabajo</h3>
        <div className="container-fluid">
            <div className="row ml-0 ml-lg-5">
                <div className="col-12 col-md-4  col-lg-6">
                    <form
                       onSubmit={addJob}
                    >    
                         <div className="row">
                        
                        <div className="col-12">
                                <label htmlFor="job" className="mt-4" >Puesto de trabajo</label>
                                <input 
                                    type="text" 
                                    id="job" 
                                    name="job"
                                    className="form-control" 
                                    placeholder="Ingrese el nombre del pais"
                                    onChange={updateState}
                                    value={job}
                                    
                                />
                            </div>
                            <div className="col-12">

                                <label htmlFor="business" >Empresa</label>
                                <select 
                                     className="custom-select" 
                                     id="business"
                                     name="business"
                                     onChange={updateState}
                                     value={business}
                                     >
                                    <option value="">--Seleccionar Empresa --</option>
                                     {businessArr.map((business,index) => (
                                     <option key={index} value={Number(business.id)} >{business.name}</option>
                                   ))} 
                                 </select>
                            </div>
                            
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary mt-4"
                        >
                            Añadir Puesto
                        </button>
                        {(error) 
                             ? <Mensaje tipo="danger" mensaje="Todos los campos son obligatorios" time={3}/>: null
                        }
                    </form>
                </div>
                <div className="col-12 mt-5 col-md-8 mt-md-0 col-lg-6 ">
                    {(loading) 
                        ?  <Spiner/>
                        :  <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <ListJobs
                                        deleteJob={deleteJob}
                                        jobs={jobs}
                                        />
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

export default Job;

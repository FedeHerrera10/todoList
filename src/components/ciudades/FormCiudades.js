import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
//import PaisesContext from '../../context/paises/paisesContext'
import CiudadesContext from '../../context/ciudades/ciudadesContext';
import SelectPaises from '../paises/SelectPaises';
import Mensaje from '../utils/Mensaje';
const FormCiudades = () => {

    
    const {errorformulario,ciudadactual,agregarCiudad,validaForm,editarCiudad,obtenerCiudades} = useContext(CiudadesContext);
    const [ciudad,guardarCiudad] = useState({
        pais:'',
        nombre:''
    })
  
   // Cambia los valores del state
   const handleChange = e => {
    guardarCiudad({
        ...ciudad,[e.target.name]:e.target.value
    })
}
    
    useEffect(() => {
        if(ciudadactual !== null){
            guardarCiudad(ciudadactual)
        } else{
            guardarCiudad({
                pais:'',
                nombre:''
            })
        }
    }, [ciudadactual])
    
    
    const{pais,nombre} = ciudad;
    

    const onSubmit = e => {
        e.preventDefault();
        // Validar formulario
        if(pais.trim() === '' || nombre.trim() === ''){
            validaForm();
            return;
        }
        // Revisa si es edicion o añadir nueva ciudad
        if(ciudadactual === null)
        {
            // agregar ciudad
            agregarCiudad(ciudad);
        } else {
            editarCiudad(ciudad);
        } 
        
         //obtener ciudades 
         obtenerCiudades();
         

        //reiniciar formulario
        guardarCiudad({
            pais:'',
            nombre:''
        })
    }

    
    
    return ( 
        <form
            onSubmit={onSubmit}
        >
            <div className="row">
                <div className="col-12">
                <label htmlFor="nombre" className="mt-4" >Paises</label>
                    <SelectPaises
                     onChange={handleChange}
                     value={pais}
                    />
                </div>
                <div className="col">
                    <label htmlFor="nombre" className="mt-4" >Nombre de la Ciudad</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        className="form-control" 
                        placeholder="Ingrese el nombre de la ciudad"
                        value={nombre}
                        onChange={handleChange}
                        
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-purple mt-4"
            >
                <span className="px-2">
                   <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
                
                {(!ciudadactual) ? 'Añadir Ciudad' : 'Actualizar Ciudad'}
            
            </button>
            {(errorformulario) 
                ? <Mensaje tipo="danger" mensaje="Todos los campos son obligatorios" time={0}/>
                : null}
            </form>
     );
}
 
export default FormCiudades;
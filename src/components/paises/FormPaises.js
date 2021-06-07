import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import PaisesContext from '../../context/paises/paisesContext'
import Mensaje from '../utils/Mensaje';
const FormPaises = () => {

    const {errorformulario,paisactual,agregarPais,validaForm,editarPais,obtenerPaises} = useContext(PaisesContext);
    const [pais,guardarPais] = useState({
        codigo:'',
        nombre:''
    })
    
    useEffect(() => {
        if(paisactual !== null){
            guardarPais(paisactual)
        } else{
            guardarPais({
                codigo:'',
                nombre:''
            })
        }
    }, [paisactual])
    
    const{codigo,nombre} = pais;

    
    
    // Cambia los valores del state
    const handleChange = e => {
        guardarPais({
            ...pais,[e.target.name]:e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // Validar formulario
        if(codigo.trim() === '' || nombre.trim() === ''){
            validaForm();
            return;
        }
        // Revisa si es edicion o añadir nuevo pais
        if(paisactual === null)
        {
            // agregar pais
            agregarPais(pais);
        } else {
            editarPais(pais);
        }
        
         //obtener paises 
         obtenerPaises();
         

        //reiniciar formulario
        guardarPais({
            codigo:'',
            nombre:''
        })
    }

    

    return ( 
        <form
            onSubmit={onSubmit}
        >
            <div className="row">
                <div className="col-12">
                    <label htmlFor="codigo" >Código de pais</label>
                    <input 
                        type="text" 
                        id="codigo" 
                        name="codigo"
                        className="form-control" 
                        placeholder="Ingrese el código del pais"
                        onChange={handleChange}
                        value={codigo}
                    />
                </div>
                <div className="col">
                    <label htmlFor="nombre" className="mt-4" >Nombre de pais</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        className="form-control" 
                        placeholder="Ingrese el código el nombre del pais"
                        onChange={handleChange}
                        value={nombre}
                        
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
                
                {(!paisactual) ? 'Añadir Pais' : 'Actualizar Pais'}
            
            </button>
            {(errorformulario) 
                ? <Mensaje tipo="danger" mensaje="Todos los campos son obligatorios" time={0}/>
                : null}
            </form>
     );
}
 
export default FormPaises;
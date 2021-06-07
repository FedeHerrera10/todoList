import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import PuestosContext from '../../context/puestos/puestosContext'
import SelectEmpresas from '../empresas/SelectEmpresas'
import Mensaje from '../utils/Mensaje';
const FormPuestos = () => {


    const{errorformulario,validaForm,puestoactual,agregarPuesto,obtenerPuestos,editarPuesto} = useContext(PuestosContext);
    const[puesto,guardarPuesto] = useState({
        cargo:'',
        empresa:''
    })

    useEffect(() => {
        if(puestoactual !== null){
            guardarPuesto(puestoactual)
        } else{
            guardarPuesto({
                cargo:'',
                empresa:''
            })
        }
    }, [puestoactual])


    const{cargo,empresa} = puesto;
    // Cambia los valores del state
    const handleChange = e => {
        guardarPuesto({
            ...puesto,[e.target.name]:e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // Validar formulario
        if(cargo.trim() === '' || empresa.trim() ===''){
            validaForm();
            return;
        }
        if(puestoactual === null)
        {
            // agregar puesto
            agregarPuesto(puesto);
        } else {
            editarPuesto(puesto);
        } 
        
         //obtener puestos
         obtenerPuestos();
         

        //reiniciar formulario
        guardarPuesto({
            cargo:'',
            empresa:''
        })
        
    }

    

    return ( 
        <form
            onSubmit={onSubmit}
        >
            <div className="row">
                <div className="col-12">
                    <label htmlFor="codigo" >Puesto</label>
                    <input 
                        type="text" 
                        id="carog" 
                        name="cargo"
                        className="form-control" 
                        placeholder="Ingrese el puesto"
                        onChange={handleChange}
                        value={cargo}
                    />
                </div>
                
                <div className="col">
                <label htmlFor="empresas" className="mt-4" >Empresas</label>
                    <SelectEmpresas
                        onChange={handleChange}
                        value={empresa}
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
                
                {(!puestoactual) ? 'Añadir Puesto' : 'Actualizar Puesto'}
            
            </button>
            {(errorformulario) 
                ? <Mensaje tipo="danger" mensaje="Todos los campos son obligatorios" time={0}/>
                : null}
            </form>
     );
}
 
export default FormPuestos;
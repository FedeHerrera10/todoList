import React, { useReducer } from 'react';
import shortid from 'shortid'
import PuestosContext from './puestosContext';
import PuestosReducer from './puestosReducer';
import {
    VALIDAR_FORMULARIO,
    AGREGAR_PUESTO,
    OBTENER_PUESTOS,
    ELIMINAR_PUESTO,
    SELECCIONAR_PUESTO,
    EDITAR_PUESTO
    
} from '../../types/index'

import 
{ insertarDatosLocalStorage, 
  obtenerDatosLocalStorage,
  borrarItemLocalStorage,
  actualizarItemLocalStorage

} from '../../components/API';

const PuestosState = props => {
    
    const initialState = {
        puestos:[],
        errorformulario:false,
        puestoactual:null
        
    }

    // Dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(PuestosReducer,initialState);

    const validaForm = () => {
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }

    // Agregar un puesto al state
    const agregarPuesto = puesto => {
        puesto.id = shortid.generate();
        insertarDatosLocalStorage('puestos',puesto);
        dispatch({
            type:AGREGAR_PUESTO,
            payload:puesto
        })
    }

    const obtenerPuestos = () => {
        const puestosLS= obtenerDatosLocalStorage('puestos');
        dispatch({
            type:OBTENER_PUESTOS,
            payload:puestosLS
        })
    }
    
    const eliminarPuesto = id =>{
        borrarItemLocalStorage('puestos',id);
        dispatch({
            type:ELIMINAR_PUESTO,
            payload:id
        })
    }

    const seleccionarPuesto = puesto => {
        dispatch({
            type:SELECCIONAR_PUESTO,
            payload:puesto
        })
    }

    const editarPuesto = puesto => {
        actualizarItemLocalStorage('puestos',puesto)
        dispatch({
            type:EDITAR_PUESTO,
            payload:puesto
        })
    }
    return(
        <PuestosContext.Provider
            value={{
                puestos:state.puestos,
                errorformulario:state.errorformulario,
                puestoactual:state.puestoactual,
                obtenerPuestos,
                validaForm,
                agregarPuesto,
                eliminarPuesto,
                seleccionarPuesto,
                editarPuesto
            }}
        >
          {props.children}  
        </PuestosContext.Provider>

    )
}

export default PuestosState;
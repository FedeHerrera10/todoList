import React, { useReducer } from 'react';
import shortid from 'shortid'
import CiudadesContext from './ciudadesContext';
import ciudadesReducer from './ciudadesReducer';
import {
    OBTENER_CIUDADES,
    AGREGAR_CIUDAD ,
    SELECCIONAR_CIUDAD,
    ELIMINAR_CIUDAD,
    EDITAR_CIUDAD,
    VALIDAR_FORMULARIO
} from '../../types/index'
import 
{ insertarDatosLocalStorage, 
  obtenerDatosLocalStorage,
  borrarItemLocalStorage,
  actualizarItemLocalStorage

} from '../../components/API';


const CiudadesState = props => {
    
    const initialState = {
        ciudades:[],
        errorformulario:false,
        ciudadactual:null,
        ciudadempresa:null
    }

    // Dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(ciudadesReducer,initialState);

    const obtenerCiudades = () => {
        const ciudadesLS= obtenerDatosLocalStorage('ciudades');
        dispatch({
            type:OBTENER_CIUDADES,
            payload:ciudadesLS
        })
    }

    // Agregar un pais al state
    const agregarCiudad = ciudad => {
        ciudad.id = shortid.generate();
        insertarDatosLocalStorage('ciudades',ciudad);
        dispatch({
            type:AGREGAR_CIUDAD,
            payload:ciudad
        })
    }

    const validaForm = () => {
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }

    const eliminarCiudad = id =>{
        borrarItemLocalStorage('ciudades',id);
        dispatch({
            type:ELIMINAR_CIUDAD,
            payload:id
        })
    }

    const seleccionarCiudad = ciudad => {
        dispatch({
            type:SELECCIONAR_CIUDAD,
            payload:ciudad
        })
    }

    const editarCiudad = ciudad => {
        actualizarItemLocalStorage('ciudades',ciudad)
        dispatch({
            type:EDITAR_CIUDAD,
            payload:ciudad
        })
    }

    const obtenerCiudad = id =>{
       const ciudadId=state.ciudades.filter(ciudad => (ciudad.id === id));
       if(ciudadId.length > 0){
            return ciudadId[0]
        } else{
        return null;
        }
    }


    return(
        <CiudadesContext.Provider
            value={{
                ciudades:state.ciudades,
                errorformulario:state.errorformulario,
                ciudadactual:state.ciudadactual,
                ciudadempresa:state.ciudadempresa,
                obtenerCiudades,
                validaForm,
                agregarCiudad,
                eliminarCiudad,
                seleccionarCiudad,
                editarCiudad,
                obtenerCiudad
            }}
        >
          {props.children}  
        </CiudadesContext.Provider>

    )

}


export default CiudadesState
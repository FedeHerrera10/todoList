import React, { useReducer } from 'react';
import shortid from 'shortid'
import PaisesContext from './paisesContext';
import PaisesReducer from './paisesReducer';
import {
    AGREGAR_PAIS,
    OBTENER_PAISES,
    VALIDAR_FORMULARIO,
    SELECCIONAR_PAIS,
    ELIMINAR_PAIS,
    EDITAR_PAIS
} from '../../types/index'
import 
{ insertarDatosLocalStorage, 
  obtenerDatosLocalStorage,
  borrarItemLocalStorage,
  actualizarItemLocalStorage

} from '../../components/API';

const PaisesState = props => {
    
    const initialState = {
        paises:[],
        errorformulario:false,
        paisactual:null,
        paisempresa:null
    }

    // Dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(PaisesReducer,initialState);

    const obtenerPaises = () => {
        const paisesLS= obtenerDatosLocalStorage('paises');
        dispatch({
            type:OBTENER_PAISES,
            payload:paisesLS
        })
    }

    // Agregar un pais al state
    const agregarPais = pais => {
        pais.id = shortid.generate();
        insertarDatosLocalStorage('paises',pais);
        dispatch({
            type:AGREGAR_PAIS,
            payload:pais
        })
    }

    const validaForm = () => {
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }

    const eliminarPais = id =>{
        borrarItemLocalStorage('paises',id);
        dispatch({
            type:ELIMINAR_PAIS,
            payload:id
        })
    }

    const seleccionarPais = pais => {
        dispatch({
            type:SELECCIONAR_PAIS,
            payload:pais
        })
    }

    const editarPais = pais => {
        actualizarItemLocalStorage('paises',pais)
        dispatch({
            type:EDITAR_PAIS,
            payload:pais
        })
    }

    const obtenerPais = id =>{
       const paisId=state.paises.filter(pais => (pais.id === id));
       console.log(state.paises,'si')
       if(paisId.length > 0){
            return paisId[0]
       } else{
            return null;
       }
       
    }


    return(
        <PaisesContext.Provider
            value={{
                paises:state.paises,
                errorformulario:state.errorformulario,
                paisactual:state.paisactual,
                paisempresa:state.paisempresa,
                obtenerPaises,
                agregarPais,
                validaForm,
                eliminarPais,
                seleccionarPais,
                editarPais,
                obtenerPais
            }}
        >
          {props.children}  
        </PaisesContext.Provider>

    )

}


export default PaisesState
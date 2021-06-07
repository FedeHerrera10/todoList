import React, { useReducer } from 'react';
import shortid from 'shortid'
import EmpresaContext from './empresasContext';
import EmpresaReducer from './empresasReducer';
import {
    VALIDAR_FORMULARIO,
    OBTENER_EMPRESAS,
    AGREGAR_EMPRESA,
    SELECCIONAR_EMPRESA,
    ELIMINAR_EMPRESA,
    EDITAR_EMPRESA,
    

} from '../../types/index'
import 
{ insertarDatosLocalStorage, 
  obtenerDatosLocalStorage,
  borrarItemLocalStorage,
  actualizarItemLocalStorage

} from '../../components/API';

const EmpresaState = props => {
    
    const initialState = {
        empresas:[],
        errorformulario:false,
        empresaactual:null
    }

    // Dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(EmpresaReducer,initialState);

    const obtenerEmpresas = () => {
        const empresasLS= obtenerDatosLocalStorage('empresas');
        dispatch({
            type:OBTENER_EMPRESAS,
            payload:empresasLS
        })
    }

    const validaForm = () => {
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }

     // Agregar una empresa al state
     const agregarEmpresa = empresa => {
        empresa.id = shortid.generate();
        insertarDatosLocalStorage('empresas',empresa);
        dispatch({
            type:AGREGAR_EMPRESA,
            payload:empresa
        })
    }

    const eliminarEmpresa = id =>{
        borrarItemLocalStorage('empresas',id);
        dispatch({
            type:ELIMINAR_EMPRESA,
            payload:id
        })
    }

    const seleccionarEmpresa = empresa => {
        dispatch({
            type:SELECCIONAR_EMPRESA,
            payload:empresa
        })
    }

    const editarEmpresa = empresa => {
        actualizarItemLocalStorage('empresas',empresa)
        dispatch({
            type:EDITAR_EMPRESA,
            payload:empresa
        })
    }

    const obtenerEmpresa = id =>{
        const empresaId=state.empresas.filter(empresa => (empresa.id === id));
        if(empresaId.length > 0){
             return empresaId[0]
         } else{
         return null;
         }
     }
    

    return(
        <EmpresaContext.Provider
            value={{
                empresas:state.empresas,
                errorformulario:state.errorformulario,
                empresaactual:state.empresaactual,
                obtenerEmpresas,
                agregarEmpresa,
                validaForm,
                eliminarEmpresa,
                editarEmpresa,
                seleccionarEmpresa,
                obtenerEmpresa
                
            }}
        >
          {props.children}  
        </EmpresaContext.Provider>

    )

}


export default EmpresaState
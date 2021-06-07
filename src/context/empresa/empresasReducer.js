import {
    VALIDAR_FORMULARIO,
    OBTENER_EMPRESAS,
    AGREGAR_EMPRESA,
    SELECCIONAR_EMPRESA,
    ELIMINAR_EMPRESA,
    EDITAR_EMPRESA
} from '../../types/index'

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type){
        
        case OBTENER_EMPRESAS : {
            return ({
                ...state,
                empresas:action.payload
            })
        }
        case AGREGAR_EMPRESA : {
            return ({
                ...state,
                empresas:[...state.empresas,action.payload],
                errorformulario:false
            })
        }

        case VALIDAR_FORMULARIO : {
            return ({
                ...state,
                errorformulario:true
            })
        }

        case ELIMINAR_EMPRESA : {
            return ({
                ...state,
                empresas:state.empresas.filter(empresa => empresa.id !== action.payload)
            })
        }

        case SELECCIONAR_EMPRESA : {
            return ({
                ...state,
                empresaactual:action.payload
            })
        }
        
        case EDITAR_EMPRESA : {
            return ({
                ...state,
                empresa:[state.empresas.map(empresa => empresa.id === action.payload.id ? action.payload : empresa )],
                empresaactual:null
            })
        }

                default:
            return state;
    }
}
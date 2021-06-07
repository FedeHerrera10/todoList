import {
    OBTENER_CIUDADES,
    AGREGAR_CIUDAD ,
    SELECCIONAR_CIUDAD,
    ELIMINAR_CIUDAD,
    EDITAR_CIUDAD,
    VALIDAR_FORMULARIO
} from '../../types/index'

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type){
        case OBTENER_CIUDADES : {
            return ({
                ...state,
                ciudades:action.payload
            })
        }
        case AGREGAR_CIUDAD : {
            return ({
                ...state,
                ciudades:[...state.ciudades,action.payload],
                errorformulario:false,
                ciudadactual:null
            })
        }
         case VALIDAR_FORMULARIO : {
            return ({
                ...state,
                errorformulario:true
            })
        }
        
        case ELIMINAR_CIUDAD : {
            return ({
                ...state,
                ciudades:state.ciudades.filter(ciudad => ciudad.id !== action.payload)
            })
        }
        
        case SELECCIONAR_CIUDAD : {
            return ({
                ...state,
                ciudadactual:action.payload
            })
        }

        case EDITAR_CIUDAD : {
            return ({
                ...state,
                ciudades:[state.ciudades.map(ciudad => ciudad.id === action.payload.id ? action.payload : ciudad )],
                ciudadactual:null
            })
        }
        
        default:
            return state;
    }
}
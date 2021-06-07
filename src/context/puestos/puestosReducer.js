import {
    VALIDAR_FORMULARIO,
    AGREGAR_PUESTO,
    OBTENER_PUESTOS,
    ELIMINAR_PUESTO,
    SELECCIONAR_PUESTO,
    EDITAR_PUESTO
    
} from '../../types/index'

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type){
        case VALIDAR_FORMULARIO : {
            return ({
                ...state,
                errorformulario:true
            })
        }

        case OBTENER_PUESTOS : {
            return ({
                ...state,
                puestos:action.payload
            })
        }
        case AGREGAR_PUESTO : {
            return ({
                ...state,
                puestos:[...state.puestos,action.payload],
                errorformulario:false
            })
        }

        case ELIMINAR_PUESTO : {
            return ({
                ...state,
                puestos:state.puestos.filter(puesto => puesto.id !== action.payload)
            })
        }

        case SELECCIONAR_PUESTO : {
            return ({
                ...state,
                puestoactual:action.payload
            })
        }

        case EDITAR_PUESTO : {
            return ({
                ...state,
                puestos:[state.puestos.map(puesto => puesto.id === action.payload.id ? action.payload : puesto )],
                puestoactual:null
            })
        }

        

        
        default :
         return state;
    }
}
import {
    AGREGAR_PAIS,
    OBTENER_PAISES,
    VALIDAR_FORMULARIO,
    SELECCIONAR_PAIS,
    ELIMINAR_PAIS,
    EDITAR_PAIS,
    OBTENER_PAIS
} from '../../types/index'

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type){
        case OBTENER_PAISES : {
            return ({
                ...state,
                paises:action.payload
            })
        }
        case AGREGAR_PAIS : {
            return ({
                ...state,
                paises:[...state.paises,action.payload],
                errorformulario:false
            })
        }
        case VALIDAR_FORMULARIO : {
            return ({
                ...state,
                errorformulario:true
            })
        }

        case ELIMINAR_PAIS : {
            return ({
                ...state,
                paisseleccionado:state.paises.filter(pais => pais.id !== action.payload)
            })
        }

        case SELECCIONAR_PAIS : {
            return ({
                ...state,
                paisactual:action.payload
            })
        }

        case EDITAR_PAIS : {
            return ({
                ...state,
                paises:[state.paises.map(pais => pais.id === action.payload.id ? action.payload : pais )],
                paisactual:null
            })
        }

        case OBTENER_PAIS : {
            return ({
                ...state,
                paisempresa:state.paises.filter(pais => (pais.id === action.payload))
            })
        }

        default:
            return state;
    }
}
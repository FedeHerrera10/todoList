import React,{useState} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
const Alerta = () => {
const[mostrarAlerta,guardarMostrarAlerta] = useState(false)

    return ( 
        <SweetAlert
            show={mostrarAlerta}
            title="Demo Complex"
            text="SweetAlert in React"
            showCancelButton
        > Alerta 
        </SweetAlert>
        
     );
}
 
export default Alerta;
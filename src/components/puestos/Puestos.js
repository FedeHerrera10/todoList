import React,{Fragment} from 'react';
import FormPuestos from './FormPuestos'
import ListadoPuestos from './ListadoPuestos';
const Puestos = () => {
    return ( 
        <Fragment>
            
            <div className="container-fluid container-app">
                <h3 className="mt-5 mb-5 pb-2 border-bottom">Puestos Disponibles</h3>
                <div className="row ml-0 ml-lg-0">
                    <div className="col-12 col-md-5 col-lg-5">
                        <FormPuestos/>
                    </div>
                    
                    <div className="col-12 mt-5 col-md-6 mt-md-0 col-lg-7">
                        <ListadoPuestos/>
                    </div>
                </div>
            </div>                        
            
        </Fragment>
     );
}
 
export default Puestos;
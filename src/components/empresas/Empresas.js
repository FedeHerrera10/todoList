import React from 'react';
import { Fragment } from 'react';
import FormEmpresa from './FormEmpresa'
import ListadoEmpresas from './ListadoEmpresas'

const Empresas = () => {
    return ( 
        <Fragment>
                  <div className="container-fluid container-app">
                <h3 className="mt-5 mb-5 pb-2 border-bottom">Administrador de Ciudades</h3>
                <div className="row ml-0 ml-lg-0">
                    <div className="col-12 col-md-4 col-lg-5">
                        <FormEmpresa/>
                    </div>
                    
                    <div className="col-12 mt-5 col-md-8 mt-md-0 col-lg-7">
                        <ListadoEmpresas/>
                    </div>
                </div>
            </div>    
        </Fragment>
     );
}
 
export default Empresas;

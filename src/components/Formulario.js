import React from 'react';

class Formulario extends React.Component{
    constructor(props) {
        super(props);
        this.ingresaCargo = this.ingresaCargo.bind(this);
        this.verificaError = this.verificaError.bind(this);
        this.actualizarState = this.actualizarState.bind(this);
        this.state = {cargo : {
            puesto:'',
            empresa:'',
            ciudad :'',
            pais:'',
        },
        error:false
        }
        this.baseState = this.state;
    }
    
    actualizarState (e) {
        console.log(e)
         this.setState({
             cargo:{
                 ...this.state.cargo,
                 [e.target.name] : e.target.value
             }
         }); 

    }
    
    ingresaCargo = e =>{
        e.preventDefault();
        if (!this.verificaError()){
            let {cargo} = this.state;
            cargo.id=Date.now();
            const cargosNuevos = [...this.props.cargos,cargo];
            this.props.agregarCargos(cargosNuevos);
            this.setState(this.baseState)
            e.target.reset();
        }
    }

    verificaError(){
        const {puesto,empresa,ciudad,pais} = this.state.cargo;
        if( puesto.toString().trim() === '' || empresa.toString().trim() === '' || 
            ciudad.toString().trim() === '' || pais.toString().trim() === ''  ) {
            this.setState({error:true});
            return true;
        }

        this.setState({error:false});
    }

    
      render() {
        return (
            <div>
            <div className="card">
            <div className="card-body">
            <h1 className="text-center mb-3">Ingresar Puestos</h1>
            <form onSubmit={ this.ingresaCargo }>
                <div className="form-group">
                <label>Puesto</label>
                <input 
                    type="text" 
                    name="puesto"
                    className="form-control"  
                    placeholder="Ingrese el puesto"
                    onBlur={ this.actualizarState }
                    />
                </div>
                <div className="form-group">
                <label>Empresa</label>
                <input 
                    type="text" 
                    name="empresa"
                    className="form-control"  
                    placeholder="Ingrese la empresa"
                    onBlur={ this.actualizarState }
                    
                    />
                </div>
                <div className="form-group">
                <label>Ciudad</label>
                <input 
                    type="text" 
                    name="ciudad"
                    className="form-control"  
                    placeholder="Ingrese la ciudad"
                    onBlur={ this.actualizarState }
                    
                    />
                </div>
                <div className="form-group">
                <label>Pais</label>
                <input 
                    type="text" 
                    name="pais"
                    className="form-control"  
                    placeholder="Ingrese el pais"
                    onBlur={ this.actualizarState }
                    
                    />
                </div>
                <div className="mt-2">
                  <input
                      type="submit"
                      value="Ingresar Puesto"
                      className="btn btn-info btn-block mt-5"
                  />
              </div>

                
            </form>
            </div>
            </div>
            {(this.state.error) ? <div className="alert alert-danger mt-3" role="alert">
                        Todos los campos son obligatorios
                        </div> : null}
        </div>
        );
      }
    }

export default Formulario;
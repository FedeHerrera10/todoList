import { Component } from 'react';
import Formulario from './components/Formulario'
import Listado from './components/Listado';
import './app.css';
class App extends Component{

  constructor(props){
    super(props)
    this.state=({cargos:[]})
    this.agregarCargos = this.agregarCargos.bind(this);
  }


  agregarCargos (cargos) {
    this.setState({
        cargos: cargos
        }
    ); 

}

  render(){
    return (
      <div className="container mt-5">
        <Formulario
          agregarCargos = {this.agregarCargos}
          cargos = {this.state.cargos}
          
        />

        <Listado
        agregarCargos = {this.agregarCargos}
        cargos = {this.state.cargos}
        />
        
      </div>
      );
    }
  }

export default App;

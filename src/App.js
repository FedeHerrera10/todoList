import './app.css';
import { Component ,Fragment} from 'react';
import {Switch, Route } from "react-router-dom";
import Empresas from './components/empresas/Empresas';
import Home from './components/views/Home';
import PaisesState from './context/paises/paisesState';
import Paises from './components/paises/Paises';
import Header from './components/views/Header';
import Ciudades from './components/ciudades/Ciudades';
import CiudadesState from './context/ciudades/ciudadesState';
import EmpresaState from './context/empresa/empresasState';
import PuestosState from './context/puestos/puestosState';
import Puestos from './components/puestos/Puestos';

class App extends Component{
  constructor(props){
    super(props)
    this.props = props;
  }

  render(){
    return (
      <Fragment>
        <Header/>
        <PaisesState>
          <CiudadesState>
            <EmpresaState>
              <PuestosState>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/empresas" component={Empresas}/>
            <Route path="/paises" component={Paises}/>
            <Route path="/ciudades" component={Ciudades}/>
            <Route path="/puestos" component={Puestos}/>
          </Switch>
            </PuestosState>
          </EmpresaState>
          </CiudadesState>
      </PaisesState>
        </Fragment>

      )
    }
  }

export default App;

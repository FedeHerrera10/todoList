import './app.css';
import { Component ,Fragment} from 'react';
import {Switch, Route } from "react-router-dom";
import Business from './components/Business'
import Home from './components/views/Home';
import Country from './components/Country';
import City from './components/City';
import Header from './components/views/Header';
import Job from './components/Job';

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Fragment>
        <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/empresas" component={Business}/>
        <Route path="/paises" component={Country}/>
        <Route path="/ciudades" component={City}/>
        <Route path="/puestos" component={Job}/>
      </Switch>
        </Fragment>

      )
    }
  }

export default App;

import React from 'react';


class Listado extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.eliminaCargo = this.eliminaCargo.bind(this);
    }

    eliminaCargo(e){
        const id = Number(e.target.dataset.id);
        const {cargos} = this.props;
        console.log(cargos)
        const result = cargos.filter(cargo => cargo.id !== id)
        this.props.agregarCargos(result);
        
    }

    render(){
        return(
            (this.props.cargos.length > 0) ?
            <div className="mt-5">
        <h1>Listado de cargos</h1>
        <table className="table table-primary  table-hover">
        <thead>
        <tr>
            <th scope="col">Puesto</th>
            <th scope="col">Empresa</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Pais</th>
            <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody className="table-striped">
            {this.props.cargos.map((cargo,index) => {
                return (
                    <tr key={index} className="table-light">
                    <td>{cargo.puesto}</td>
                    <td>{cargo.empresa}</td>
                    <td>{cargo.ciudad}</td>
                    <td>{cargo.pais}</td>
                    <td><button data-id={cargo.id} onClick={this.eliminaCargo} className="btn btn-danger">Eliminar</button></td>
                    </tr>
                )
            })}
        </tbody>
        </table>
        </div>
        :
        <h3 className="text-center mt-5 mb-5">No se encontraron cargos.</h3>
        )
    }
}

export default Listado;
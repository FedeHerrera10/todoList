import React,{useState,useEffect,useContext} from 'react';
import Mensaje from '../utils/Mensaje';
import SelectCiudades from '../ciudades/SelectCiudades';
import SelectPaises from '../paises/SelectPaises';
import EmpresasContext from '../../context/empresa/empresasContext';
const FormEmpresa = () => {

    const {errorformulario,agregarEmpresa,empresaactual,obtenerEmpresas,validaForm,editarEmpresa} = useContext(EmpresasContext);
    const [empresa,guardarEmpresa] = useState({
        pais:'',
        ciudad:'',
        nombre:''
    })

    // Cambia los valores del state
   const handleChange = e => {
    guardarEmpresa({
        ...empresa,[e.target.name]:e.target.value
    })
}
    
    useEffect(() => {
        if(empresaactual !== null){
            guardarEmpresa(empresaactual)
        } else{
            guardarEmpresa({
                pais:'',
                ciudad:'',
                nombre:''
            })
        }
    }, [empresaactual])
    
    
    const{pais,ciudad,nombre} = empresa;
    

    const onSubmit = e => {
        e.preventDefault();
        // Validar formulario
        if(pais.trim() === '' || ciudad.trim() === ''  || nombre.trim() === ''){
            validaForm();
            return;
        }
        // Revisa si es edicion o añadir nueva ciudad
        if(empresaactual === null)
        {
            // agregar ciudad
            agregarEmpresa(empresa);
        } else {
            editarEmpresa(empresa);
        } 
        
         //obtener empresas 
         obtenerEmpresas();
         

        //reiniciar formulario
        guardarEmpresa({
            pais:'',
            ciudad:'',
            nombre:''
        })
    }

    return ( 
        <form
            onSubmit={onSubmit}
        >
            <div className="row">
                <div className="col-12">
                <label htmlFor="nombre" className="mt-4" >Paises</label>
                    <SelectPaises
                    onChange={handleChange}
                    value={pais}/>
                </div>
                <div className="col-12">
                <label htmlFor="nombre" className="mt-4" >Ciudades</label>
                    <SelectCiudades
                    onChange={handleChange}
                    value={ciudad}
                    paisActual={pais}
                    />
                </div>
                <div className="col">
                    <label htmlFor="nombre" className="mt-4" >Nombre de la Empresa</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        className="form-control" 
                        placeholder="Ingrese el nombre de la empresa"
                        value={nombre}
                        onChange={handleChange}
                        
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-purple mt-4"
            >
                <span className="px-2">
                   <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
                
                {(!empresaactual) ? 'Añadir Ciudad' : 'Actualizar Ciudad'}
            
            </button>
            {(errorformulario) 
                ? <Mensaje tipo="danger" mensaje="Todos los campos son obligatorios" time={0}/>
                : null}
            </form>



     );
}
 
export default FormEmpresa;
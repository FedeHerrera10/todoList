
export const  obtenerDatosLocalStorage = (item) => {
        const resultado = localStorage.getItem(item);

        if(resultado === null){
            return [];
        } else{
            return JSON.parse(resultado);
        }
    }

export const insertarDatosLocalStorage = (item,data) => {
        const resultado=obtenerDatosLocalStorage(item)
        const datos = [...resultado,data]; 
        localStorage.setItem(item,JSON.stringify(datos));
}

export const borrarItemLocalStorage = (item,id) => {
    const resultado=obtenerDatosLocalStorage(item)
    const datos = resultado.filter(res => (res.id !== id));
    localStorage.setItem(item,JSON.stringify(datos));
}

export const actualizarItemLocalStorage = (item, data) => {
    const resultado=obtenerDatosLocalStorage(item)
    const datos = resultado.map(res => (res.id === data.id ? data : res));
    localStorage.setItem(item,JSON.stringify(datos));
}

export const filterData = (item,filter)  => {
   const dataArr =obtenerDatosLocalStorage(item);
   if(dataArr.length === 0) return [];
   
   const result = dataArr.filter(data => Number(data.id) !== Number(filter))
   return result;
}

export const filterEqualData = (item,filter)  => {
    const dataArr =obtenerDatosLocalStorage(item);
    if(dataArr.length === 0) return [];
    
    const result = dataArr.filter(data => Number(data.id) === Number(filter))
    return result;
 }

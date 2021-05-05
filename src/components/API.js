
export const  obtenerDatosLocalStorage = (item) => {
        const resultado = localStorage.getItem(item);

        if(resultado === null){
            return [];
        } else{
            return JSON.parse(resultado);
        }
    }

export const insertarDatosLocalStorage = (item,data) => {
        localStorage.setItem(item,JSON.stringify(data));
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

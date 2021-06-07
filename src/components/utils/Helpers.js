import React from 'react';

export const obtenerPais= (empresa,paises) => {

    const pais = paises.filter(pais => (pais.id === empresa.pais))
    if(pais.length === 0 ) {
            return null;
    }
    let paisTr=pais[0].nombre;
    return paisTr;
}

export const obtenerCiudad = (empresa,ciudades) => {
    const ciudad = ciudades.filter(ciudad => (ciudad.id === empresa.ciudad))
    if(ciudad.length === 0 ) {
        return null;
    }
    let ciudadTr=ciudad[0].nombre;
    return ciudadTr;
}
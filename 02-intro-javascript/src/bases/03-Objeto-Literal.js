


const persona = {
    nombre: 'adrian',
    apellido: 'martinez',
    edad: 35,
    direccion: {
        ciudad: 'RG',
        zip: 9420,
        lat: 14.3221,
        lng: 34.15,
    }
};


//console.table({persona});

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
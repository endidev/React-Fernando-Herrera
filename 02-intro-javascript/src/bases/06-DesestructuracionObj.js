

// Asignacion desestructurante

const persona = {
    nombre: 'Adri',
    apellido: 'Martinez',
    edad: 32,
    clave: 'endi',
}

const {nombre, apellido, edad, clave: pass} = persona;

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(pass)


const Context = ({nombre, edad, clave: pass, rango = 'Shinner'}) => {

    return {
        nombreClave: pass,
        anios: edad,
        latlng: {
            lat: 12.15,
            lng: 83.18
        }
    }
}

const {nombreClave, anios, latlng:{ lat: latitud }}  = Context(persona)


console.log(nombreClave, anios, latitud);
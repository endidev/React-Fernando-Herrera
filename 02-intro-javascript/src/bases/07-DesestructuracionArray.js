


const personajes = ["Goku", "Vegeta", "Gohan"]

const [ , , p3] = personajes;
console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras)
console.log(numeros)

const state = valor => {
    return [ valor, ()=>{ console.log('Hola Mundo')}];
}

const [nombre, asignarNombre] = state('goku');

console.log(nombre)
asignarNombre();
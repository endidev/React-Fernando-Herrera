


const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = nombre => {
    return `Hola, ${nombre}`;
}

const saludar3 = nombre => `Hola, ${nombre}`;
const saludar4 = (nombre) => `Hola mundo`;

console.log(saludar('Adri'))
console.log(saludar2('Adri'))
console.log(saludar3('Endi'))
console.log(saludar4())

const getUser = () => ({
    uid: 'abc123',
    username: 'endicorp',
})

const user = getUser()
console.log(user)

//Tarea
const getUsuarioActivo =  nombre => ({
        uid: 'abc123',
        username: nombre,
})

const usuarioActivo = getUsuarioActivo('Adrian')

console.log(usuarioActivo)


const activo = true;

//modo clasico
const mensaje = (activo) ? 'Activo' : 'Inactivo';
//modo solo por verdadero
const mensaje2 = (activo) && 'Activo';

console.log(mensaje);
console.log(mensaje2);
import getHeroById from "./bases/08-Imports-Exports";



// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroById(2);
//         resolve(heroe);
//         //reject('no se encontro el heroe')
//     }, 3000);
// });

// promesa.then( (heroe) => {
//     console.log('hero : ', heroe)
// })
// .catch( err => console.warn(err))

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id);
            if(heroe){
                resolve(heroe);

            } else {
                reject('no se encontro el heroe')
            }
        }, 3000);
    });

}

// getHeroByIdAsync(12)
//     .then( heroe => console.log('Heroe', heroe))
//     .catch( err => console.log(err))

    getHeroByIdAsync(2)
    .then( console.log)
    .catch( console.log)
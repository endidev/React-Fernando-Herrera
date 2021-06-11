//import { heroes } from './data/heroes';

import  heroes, { owners } from '../data/heroes';

console.log(owners)

export const getHeroById = id => {
    return heroes.find(hero => hero.id === id);
}

//console.log(getHeroById(2))

export const getHeroByOwn = own => heroes.filter(hero => hero.owner === own);

//console.log(getHeroByOwn('DC'))


export default getHeroById;
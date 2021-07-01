import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {


    // const [categories, setCategories] = useState(['One Punch'])
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'HunterXHunter'])
    //     setCategories( cats => [...cats, 'HxH'])
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar serie</button> */}

            { 
                categories.map( category => 
                    <GifGrid 
                        key={category}
                        category={category}/>    
                )
            }
        </>
    );
}




export default GifExpertApp;
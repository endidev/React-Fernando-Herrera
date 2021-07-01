import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import PropTypes from 'prop-types';


export const useFetchGifs = ( category ) =>  {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])

    return state; //data [], loading:true;
}


useFetchGifs.propTypes = {
    category: PropTypes.string.isRequired
}
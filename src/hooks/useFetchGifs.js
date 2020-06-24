import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

// TODO: Creamos un custom hook
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                // Aplicamos un retraso para visualizar el loading
                // setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
                // }, 3000)
            })
    }, [category]) // se disparará el useEffect() cada vez que category cambie

    return state;
}

// los useEffect() no pueden ser async

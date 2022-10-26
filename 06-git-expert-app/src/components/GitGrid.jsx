import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsItem } from './gifsItem';
import PropType from 'prop-types';

export const GitGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs( category );  
    //console.log({images, isLoading});

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading ? (<h2>cargando...</h2>): null
            }
            
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifsItem key={image.id} { ...image }/>
                    ))
                }
            </div>
        </>
    )
}

GitGrid.prototype = {
    category: PropType.string.isRequired,
}
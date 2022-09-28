import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsItem } from './gifsItem';

export const GitGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs( category );  
    //console.log({images, isLoading});

    return (
        <div className='card-grid'>
            {
                isLoading ? (<h2>cargando...</h2>): null
                //isLoading && (<h2>cargando...</h2>)
            }
            
            {
                images.map((image) => (
                    <GifsItem key={image.id} { ...image }/>
                ))
            }
        </div>
    )
}

import { render, screen } from "@testing-library/react";
import { GitGrid } from "../../src/components/GitGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GitGrid', () => {

    const category = 'One Punch';

    test('debe de mostrar el login inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render( <GitGrid category ={category} />);

        expect( screen.getByText('cargando...'));
        expect( screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'saitama',
                url: 'https://localhost/saitama.jpg'
            },{
                id: '123',
                title: 'goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
    
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GitGrid category ={category} />);
        expect( screen.getAllByRole('img').length).toBe(2);

    
    })
})
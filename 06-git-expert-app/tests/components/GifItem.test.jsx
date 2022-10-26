import { render, screen } from "@testing-library/react"
import { GifsItem } from "../../src/components/gifsItem"

describe('Prueba de <GifsItem/>', () => {
    const title = "saitama";
    const url = 'https://one-punch.com/saitama.jsg';

    test('debe de hacer match con el snapshop', () => { 

        const { container } = render( <GifsItem title={title} url={url}/> )
        expect( container ).toMatchSnapshot();

    })

    test('debe de mostrar la imagen con el url y el alt indicado', () => {
        
        render( <GifsItem title={title} url={url}/> );
        // expect( screen.getByRole('img').src).toBe(url);

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    
    test('debe de mostrar el titulo en el componente', () => {
        
        render( <GifsItem title={title} url={url}/> );
        expect( screen.getByText(title)).toBeTruthy();

    })
})
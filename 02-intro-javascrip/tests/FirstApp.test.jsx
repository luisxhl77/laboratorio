import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', ()=>{
    // test('debe de hacer match con el snapshot',() => {
        
    //     const title = "Hola, soy goku";

    //     const { container } = render( <FirstApp title={title} /> );

    //     expect( container ).toMatchSnapshot();
    
    // });

    test('debe de mostrar el titulo en un h1',() => {
        
        const title = "Hola, soy goku";

        const { container,  getByText, getByTestId } = render( <FirstApp title={title} /> );
        expect( getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('#titulo');
        // expect(h1.innerHTML).toContain( title ); //sirve para mostrar solo lo que contiene title
    
        expect(getByTestId('test-title').innerHTML).toContain(title);
        // expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => { 

        const title = "Hola, soy goku";
        const subTitle = "soy un subtitulo";

        const { getByText, getAllByText } = render( 
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
            /> 
        );

        expect( getByText(subTitle) ).toBeTruthy();
        // expect( getAllByText(subTitle).length ).toBe(2);// en caso de haber varios con la misma descripcion usar este

    })

});
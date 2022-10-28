import { fireEvent, render, screen } from "@testing-library/react";
import { MulpitleCustomHooks } from "../../src/03-examples/MulpitleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useCounter');
jest.mock('../../src/hooks/useFetch');

describe('Pruebas de <MultipleCustomHooks/> ', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () =>{
        jest.clearAllMocks();
    });

    test('debe de hacer match con el sanpshot', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        })

        const { container} = render( <MulpitleCustomHooks /> );
        expect( container).toMatchSnapshot();
        
        const nextButton = screen.getByRole('button',{name: 'next quote'});  //forma de validar si un elemento esta desabilidato
        expect(nextButton.disabled).toBeTruthy();  //forma de validar si un elemento esta desabilidato
    
    })
    
    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'fernando',
                quote: 'Hola mundo',
            }],
            isLoading: false,
            hasError: null,
        })

        render( <MulpitleCustomHooks /> );

        expect( screen.getByText('Hola mundo')).toBeTruthy();
        expect( screen.getByText('fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button',{name: 'next quote'});  //forma de validar si un elemento esta desabilidato
        expect(nextButton.disabled).toBeFalsy ();  //forma de validar si un elemento esta desabilidato
         
    })
    
    test('de de llamar lafuncion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'fernando',
                quote: 'Hola mundo',
            }],
            isLoading: false,
            hasError: null,
        })



        render( <MulpitleCustomHooks /> );

        const nextButton = screen.getByRole('button',{name: 'next quote'});  //forma de validar si un elemento esta desabilidato
        fireEvent.click(nextButton);

        expect( mockIncrement ).toHaveBeenCalled()
    })
})
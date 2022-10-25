import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el <CounterApp/>', ()=>{
    const initialValue = 100

    test('debe de hacer match con el snapshot',() => {

        const { container } = render( <CounterApp/>)
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100',() => {
         
        render( <CounterApp value= {initialValue}/>)
        expect( screen.getByText(initialValue) ).toBeTruthy();

    });

    test('debe de mostrar el valor inicial de 100 en el h2',() => {
         
        render( <CounterApp value= {initialValue}/>);

        expect( screen.getByRole('heading',{ level: 2}).innerHTML).toContain('100');

    });

    test('debe de incrementar al dar click en el boton +1',() => {
         
        render( <CounterApp value= {initialValue}/>);

        fireEvent.click( screen.getByLabelText('btnIncrement') )
        expect(screen.getByText('101')).toBeTruthy();

    });

    test('debe de decrementar al dar click en el boton -1',() => {
         
        render( <CounterApp value= {initialValue}/>);

        fireEvent.click( screen.getByLabelText('btnDecrement') )
        expect(screen.getByText('99')).toBeTruthy();

    });

    test('debe de resetear al dar click en el boton Reset',() => {
         
        render( <CounterApp value= {initialValue}/>);

        fireEvent.click( screen.getByLabelText('btnReset') )
        expect(screen.getByText('100')).toBeTruthy();

    });
});
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {
    test('debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> );

        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'saitamna'}} );

        expect( input.value ).toBe('saitamna');
    })

    test('debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}} );
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith( inputValue );

    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const inputValue = '';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}} );
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0); //ambas formas sirven para validar si la funcion no se ejecuto
        expect(onNewCategory).not.toHaveBeenCalled(); //ambas formas sirven para validar si la funcion no se ejecuto


    })
})
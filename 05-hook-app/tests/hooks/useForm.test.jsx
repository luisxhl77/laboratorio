const { renderHook } = require("@testing-library/react")
const { act } = require("react-dom/test-utils")
const { useForm } = require("../../src/hooks/useForm")

describe('Pruebas de useForm', () => {
    const initialState = {
        name: 'luis',
        apellido: 'lopez'
    }

    test('debe regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialState ) );
        const { formState } = result.current;

        expect( formState ).toBe( initialState );
    })

    test('debe de cambiar el nombre del formulario', () => {
        const newName = 'mariana';

        const { result } = renderHook( () => useForm( initialState ) );
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({target: {name: 'name', value: newName}})
        })


        expect( result.current.name ).toBe( newName );
        expect( result.current.formState.name ).toBe( newName );
    })

    test('debe de restaurar el nombre del formulario', () => {
        const newName = 'mariana';

        const { result } = renderHook( () => useForm( initialState ) );
        const { onResetForm, formState, onInputChange } = result.current;

        act(() => {
            onInputChange({target: {name: 'name', value: newName}});
            onResetForm();
        })


        expect( result.current.name ).toBe( initialState.name );
        expect( result.current.formState.name ).toBe( initialState.name );
    })

})
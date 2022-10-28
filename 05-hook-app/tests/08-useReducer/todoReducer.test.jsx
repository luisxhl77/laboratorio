import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('Pruebas de todoReducer', () => {

    const initialstate = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer( initialstate , {});
        expect( newState ).toBe( initialstate );

    })

    test('debe de agregar un Todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialstate , action);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain(action.payload);

    })

    test('debe eliminar un Todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialstate , action);
        expect( newState.length ).toBe( 0 );
    })

    test('debe eliminar un Todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialstate , action);
        expect( newState[0].done ).toBe( true );

    })
})
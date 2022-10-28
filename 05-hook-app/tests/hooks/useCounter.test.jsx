import { fireEvent, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruabas de useCounterApp', () => {
    
    test('debe de retornar valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        
        expect( counter ).toBe(10);  // de esta forma se valida si el valor inicial es el asignado

        expect( increment ).toEqual( expect.any( Function ));  // de esta forma se valida si es una funcion
        expect( decrement ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));

    })

    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect( counter ).toBe(100);
    })

    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act( () => {
            increment();  // esta es la forma de poder ejecutar funciones en las pruebas unitarias
        })

        expect( result.current.counter ).toBe(101);  // cuando se tiene que tomar el estado actual del hokk toca que extraerlo directamente
    })

    test('debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act( () => {
            decrement();  // esta es la forma de poder ejecutar funciones en las pruebas unitarias
        })

        expect( result.current.counter ).toBe(99);  // cuando se tiene que tomar el estado actual del hokk toca que extraerlo directamente
    })

    test('debe de volver el contador a su estado inicial', () => {
        const initialstate = 100;
        
        const { result } = renderHook(() => useCounter( initialstate ));
        const { reset, decrement } = result.current;

        act( () => {
            decrement();  // esta es la forma de poder ejecutar funciones en las pruebas unitarias
        })

        expect( result.current.counter ).toBe(99);  // cuando se tiene que tomar el estado actual del hokk toca que extraerlo directamente
    
        act( () => {
            reset();  // esta es la forma de poder ejecutar funciones en las pruebas unitarias
        })

        expect( result.current.counter ).toBe(initialstate);  // cuando se tiene que tomar el estado actual del hokk toca que extraerlo directamente
    
    })
}) 
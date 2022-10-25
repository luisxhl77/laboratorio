import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba de 07-deses-arr', ()=>{

    test('retornaArreglo debe retornar un string y un numero',() => {

        const [texto, numero] = retornaArreglo();

        expect(typeof texto).toBe('string');
        expect(typeof numero).toBe('number');

    });
});
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('probando 02-template-string', () => {

    test('getSaludo debe retornar retornar "hola fernando"', () => { 
        
        const name = 'fernando';
        const message = getSaludo(name);

        expect( message ).toBe(`hola ${name}`);
    });

});
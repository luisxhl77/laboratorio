import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', ()=>{

    test('get saludo debe de retornar "hola fernando"',() => {
        
        const name = "fernando";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${ name }`)

    });
});
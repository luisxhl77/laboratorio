
describe('Pruebas de <DemoComponent>', () => {

    test('Esta prueba no debe de fallar',() => {
        
        //inicializacion
        const message1 = "hola mundo";
        //estimulo
        const message2 = message1.trim();
        
        //observar el comportamiento
        expect( message1 ).toBe( message2 );
    });
});
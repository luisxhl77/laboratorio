describe('pruebas en <DemoComponent />', () => { 

    test('esta prueba no debe de fallar ', () => {
        //1. inicialización
        const message1 = 'hola mundo';
        //2. estimulo
        const message2 = message1.trim();
        //3. observar el commportamiento... esperado
        expect( message1).toBe( message2 );
    });

})
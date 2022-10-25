import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba de 09-promesas', ()=>{

    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
        const resultTest = { id: 1, name: 'Batman', owner: 'DC' }
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect(hero).toEqual(resultTest);

                done(); 
            })
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

        const id = 100;

        getHeroeByIdAsync( id )
            .catch(error => {
                console.log(error);

                expect(error).toBe('No se pudo encontrar el héroe '+ id)

                done();
            })
    });
});
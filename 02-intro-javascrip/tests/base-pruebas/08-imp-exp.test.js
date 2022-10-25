import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe('Prueba de 08-imp-exp', ()=>{

    test('getHeroeById debe retornar un heroe por ID',() => {

        const id = 1;
        const hero = getHeroeById( id );

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    });

    test('getHeroeById debe retornar un undefined si no existe ID',() => {

        const id = 100;
        const hero = getHeroeById( id );
    
        expect(hero).toBe(undefined);

    });

    test('getHeroesByOwner debe retornar la longitud y similitud los heroes de DC', () => { 

        const resultTest = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]

        const owner = "DC";
        const respTest = getHeroesByOwner(owner);

        expect(respTest).toEqual(resultTest);
        expect(respTest.length).toBe(resultTest.length);
        expect(heroes.filter( (heroe) => heroe.owner === owner))

    })

    test('getHeroesByOwner debe retornar la longitud y similitud los heroes de MARVEL', () => { 

        const resultTest = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]

        const owner = "Marvel";
        const respTest = getHeroesByOwner(owner);

        expect(respTest.length).toBe(2);
        expect(respTest).toEqual(resultTest);

    })

});
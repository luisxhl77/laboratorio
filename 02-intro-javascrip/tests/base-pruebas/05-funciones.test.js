import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Puerbas en 05-funciones', ()=>{

    test('getUser debe rotarnar un objeto',() => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toStrictEqual(user);  //para evaluar objetos se utiliza toStrictEqual y toEqual

    });

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'fernando';

        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name);

        expect(testUser).toStrictEqual(user);

    })
});
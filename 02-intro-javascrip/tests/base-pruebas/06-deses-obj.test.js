import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Puerba en 08-deses-obj', ()=>{

    test('usContext debe retornar un objeto',() => {
        const datos = {
            clave:'luis123',
            edad:24
        };

        const resultTest = {
            nombreClave: datos.clave,
            anios: datos.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const respTest = usContext(datos);

        expect(resultTest).toStrictEqual(respTest);
    });
});
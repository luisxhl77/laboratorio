import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en getGifs()', () => {
    test('debe de retornanr un arreglo', async() => {

        const gifs = await getGifs('one Punch');

        expect(gifs.length).toBeGreaterThan( 0 );

        expect( gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    })
})
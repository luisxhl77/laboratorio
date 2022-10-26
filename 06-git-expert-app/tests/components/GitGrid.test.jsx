import { render, screen } from "@testing-library/react";
import { GitGrid } from "../../src/components/GitGrid";

describe('Pruebas en GitGrid', () => {

    const category = 'One Punch';

    test('debe de mostrar el login inicialmente', () => {

        render( <GitGrid category ={category} />);

        expect( screen.getByText('cargando...'));
        expect( screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan las imagenes', () => {

    })
})
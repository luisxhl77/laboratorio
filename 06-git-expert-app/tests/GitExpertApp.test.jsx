import { render, screen } from "@testing-library/react"
import { GitExpertApp } from "../src/GitExpertApp"

describe('Pruebass de GitExpertApp', () => {
    test('', () => {

        const { container } = render( <GitExpertApp/> );
        expect( container).toMatchSnapshot();
    })
})
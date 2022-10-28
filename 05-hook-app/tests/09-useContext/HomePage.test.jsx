import { render, screen } from "@testing-library/react"
import { Usercontext } from "../../src/09-useContext/context/userContext";
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Pruebas de <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'fernando'
    }

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( 
            <Usercontext.Provider value={{ user:null  }}>
                <HomePage/> 
            </Usercontext.Provider>
        );
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar el componente sin el usuario', () => {

        render( 
            <Usercontext.Provider value={{ user: null  }}>
                <HomePage/> 
            </Usercontext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        
        expect( preTag.innerHTML ).toBe('null');
    })

    test('debe de mostrar el componente con el usuario', () => {

        render( 
            <Usercontext.Provider value={{ user }}>
                <HomePage/> 
            </Usercontext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        
        expect( preTag.innerHTML ).toContain(user?.name);
        expect( preTag.innerHTML ).toContain(user?.id.toString());
    })
})
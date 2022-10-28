import { fireEvent, render, screen } from "@testing-library/react"
import { Usercontext } from "../../src/09-useContext/context/userContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas de <LoginPage/>', () => {
    const user = {
        id: 123, 
        name: 'juan', 
        email: 'asjda@gmail.com'
    }

    test('bede de hacer match con el snapshot', () => {

        const { container } = render( 
            <Usercontext.Provider value={{user: null}}>
                <LoginPage/> 
            </Usercontext.Provider>
        );
        expect( container ).toMatchSnapshot();
    })

    test('bede de mostrar el complemento sin el usuario', () => {
        const { container } = render( 
            <Usercontext.Provider value={{user: null}}>
                <LoginPage/> 
            </Usercontext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');
        expect ( preTag.innerHTML ).toBe('null');
            
    })

    test('bede de llamar al setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn()

        const { container } = render( 
            <Usercontext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/> 
            </Usercontext.Provider>
        );
        const btnSetUser = screen.getByLabelText('btnSetUser');
        fireEvent.click(btnSetUser);

        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith( user );
    })
})
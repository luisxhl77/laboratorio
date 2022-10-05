import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                    
                    <NavLink to ="/" className={(args) => {
                        return 'nav-link';
                    } }>
                        Home
                    </NavLink>

                    <NavLink to ="/login" className={(args) => {
                        return 'nav-link';
                    } }>
                        Login
                    </NavLink>

                    <NavLink to ="/about" className={(args) => {
                        return 'nav-link';
                    } }>
                        About
                    </NavLink>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

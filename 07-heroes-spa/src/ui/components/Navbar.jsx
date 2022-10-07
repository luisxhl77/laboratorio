import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link to="/" className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''} `}>
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink to="/marvel" className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''} `} >
                        Marvel
                    </NavLink>

                    <NavLink to="/dc" className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''} `} >
                        DC
                    </NavLink>
                    
                    <NavLink to="/search" className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''} `} >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>luis</span>
                    <button className='nav-item nav-link btn'>Logout</button>
                </ul>
            </div>
        </nav>
    )
}
import React from "react";
import { MenuItems} from "./MenuItem"
import './Navbar.css'
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    state = { clicked:false}

    render()
    {
        return(
            <nav className="NavbarItems">
                <h5 classname="navbar-logo">React Project</h5>
                
                <ul className="navitems">
                 <li>
                     <Link to="/">Home</Link>
                 </li>
                 <li>
                     <Link to="/Universities">Universities</Link>
                 </li>
                 <li>
                     <Link to="/PostalLookup">PostalLookup</Link>
                 </li>
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar
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
                <h1 classname="navbar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className="navitems">
                 <li>
                     <Link to="/">HOME</Link>
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
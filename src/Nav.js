import Logo from './Logo.svg';
import nav from './nav.css';
import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <div>
                <Link to="/"><img src={Logo}/></Link>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}






export default Nav;
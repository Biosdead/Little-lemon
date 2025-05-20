import Logo from './Logo.svg';
import nav from './nav.css';

function Nav(){
    return (
        <nav>
            <div>
                <a href="#"><img src={Logo}/></a>
            </div>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}






export default Nav;
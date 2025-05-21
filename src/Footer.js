import Logo from './images/secondaryLogo.png';
import footerCss from './footer.css';

function Footer(){
    return (
        <footer>
            <section className="Menus">
                <section id="Logo">
                    <img src={Logo}/>
                </section>
                <section className="Menu">
                    <h6>Navigation</h6>
                    <ul>
                      <li><a href="#">Home</a></li>   
                      <li><a href="#">About</a></li>   
                      <li><a href="#">Menu</a></li>   
                      <li><a href="#">Reservations</a></li>   
                      <li><a href="#">Order Online</a></li>   
                      <li><a href="#">Login</a></li>   
                    </ul>
                </section>
                <section className="Menu">
                    <h6>Contact</h6>
                    <ul>
                      <li>69 Vico Araratiano</li>   
                      <li>(709)879-4459</li>   
                      <li>Email Us</li>   
                      <li>littlelemon@email.com</li>   
                    </ul>
                </section>
                <section className="Menu">
                    <h6>Socials</h6>
                    <ul>
                      <li>Facebook</li>   
                      <li>Twitter</li>   
                      <li>Instagram</li>   
                      <li>Threads</li>   
                    </ul>
                </section>
            </section>
            <p id="copyright">Little Lemon - All rights Reserved 2025</p>
        </footer>
    );
}

export default Footer;
import Card from './Card';
import SaladPhoto from './images/greek salad.jpg';
import BruchettaPhoto from './images/bruchetta.svg';
import LemonPhoto from './images/lemon dessert.jpg';
import SpecialsCSS from './Specials.css';

export default function Specials(){
    return (
        <section className="Specials">
            <header>
                <h1>Specials</h1>
                <button>Online Menu</button>
            </header>
            <aside>
                <Card title="Greek Salad" price="$12.99" image={SaladPhoto} description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                <Card title="Bruchetta" price="$5.99" image={BruchettaPhoto} description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                <Card title="Lemon Dessert" price="$5.00" image={LemonPhoto} description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
            </aside>
        </section>
    );
}
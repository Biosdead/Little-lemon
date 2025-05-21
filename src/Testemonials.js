import nathanImage from './images/Nathan.jpg';
import sophieImage from './images/Sophie.jpg';
import annaImage from './images/Anna.jpg';
import noraImage from './images/Nora.jpg';
import Testemony from './Testemony.js';
import TestemonialsCss from './Testemonials.css';

export default function Testemonials(){
    return(
        <section className="Testemonials">
            <header>
                <h1>Testemonials</h1>
            </header>
            <aside>
                <Testemony name="Sophie Snyder" image={sophieImage} grade="10" text="Falafel Fridays are a thing. Crispy outside, soft chickpea heaven inside—tucked in a warm pita with tahini and pickled veggies. 🌿 Middle Eastern street food done right."/>
                <Testemony name="Nathan Gardner" image={nathanImage} grade="10" text="Caprese salad: just mozzarella, tomatoes, basil… but when it’s Mediterranean, it’s magic. Add a drizzle of olive oil and it’s basically edible art. 🇮🇹✨"/>
                <Testemony name="Anna Robertson" image={annaImage} grade="10" text="Grilled sea bass with lemon, rosemary, and olive oil. That’s it. Simple, fresh, unforgettable. The Mediterranean knows how to honor a fish. 🐟🍋🔥"/>
                <Testemony name="Nora Prescott" image={noraImage} grade="10" text="Moussaka is the Mediterranean’s answer to lasagna—layers of eggplant, spiced meat, creamy béchamel… and pure comfort in every bite. 🇬🇷❤️"/>
            </aside>
        </section>
    );
}
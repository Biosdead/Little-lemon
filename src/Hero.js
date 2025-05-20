import fooddPhoto from './restauranfood.jpg';
import HeroCss from './Hero.css';
function Hero(){
    return (
        <section className="Hero">
            <aside>
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button>Reserve a Table</button>
            </aside>
            <aside>
                <img src={fooddPhoto} width="200vw" height="200vh"/>
            </aside>
        </section>
    );
}

export default Hero;
export default function Card(props){
    return(
        <section className="Card">
        <img src={props.image}/>
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <a href="#">Click here!</a>
        </section>
    );
}
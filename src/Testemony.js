export default function Testemony(props){
    return(
        <section className="Testemony">
        <img src={props.image}/>
        <h2>{props.name}</h2>
        <h3>{props.grade}/10</h3>
        <p>{props.text}</p>
        </section>
    );
}
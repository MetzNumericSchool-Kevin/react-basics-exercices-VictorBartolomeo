export default function Exercice2() {
    return (
        <section id="exercice2">
            <h2>Si je ne suis pas là, faites sonner la cloche !</h2>

            <BoutonAppelArchibald quandSorcierRepond={function handleClick(message) {
                alert(message);
            }}/>
        </section>
    );
}

function BoutonAppelArchibald(props) {
    const message = "🧙Archibald : J'arrive, j'arrive Aventurier !"
    return (<button onClick={function handleClick() {
        props.quandSorcierRepond(message)
    }}>
        Yo.
    </button>)

}
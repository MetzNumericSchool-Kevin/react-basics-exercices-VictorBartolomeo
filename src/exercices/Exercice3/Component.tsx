import {useState} from "react";

export default function Exercice3() {
    return (
        <section id="exercice3" className="my-5 flex self-center">
            <h2>Le miroir de beauté</h2>

            <Miroir/>

            <p>Vous avez l'air d'être un aventurier plein de charme dites-moi.</p>
        </section>
    )
}

function Miroir() {
    const [visibility, setVisibility] = useState(false)
    const styleMirror = visibility ? {opacity: 1} : {opacity: 0};
    return (
        <div className="card bg-dark border border-warning-subtle miroir"
             onMouseEnter={() => setVisibility(true)} onMouseLeave={() => setVisibility(false)}>
            <img src="/aventurier.jpg" className="card-img-top img-fluid" style={styleMirror}/>
            <div className="card-body">
                <h5 className="card-title">Miroir mon beau miroir</h5>
                <p className="card-text">Quel est mon reflet ?</p>
            </div>
        </div>
    )
}
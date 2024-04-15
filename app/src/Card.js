import logoReact from './logo.svg';
import "./card.css"

export default function Card ({nome, cognome}){
    return (
        <div className = "Card">
            <div>
                <img src = {logoReact} alt = "alt" width="200" height="200" />
            </div>

            <div>
                {nome}        
            </div>

            <div>
                {cognome}
            </div>    
        </div>
    );  
}
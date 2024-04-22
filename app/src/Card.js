import logoReact from './logo.svg';
import "./card.css"
import ButtonContatore from './ButtonContatore';
import ButtonElimina from './ButtonElimina';

export default function Card ({user, loadData}){
    return (
        <div className = "Card">
            <div>
                <img src = {logoReact} alt = "alt" width="200" height="200" />
            </div>

            <div>
                {user.nome} {user.cognome}     
            </div>
            <div className='alignButtons flex-container'>
                <ButtonContatore user = {user} loadData = {loadData} />
                <ButtonElimina user = {user} loadData = {loadData}/>
            </div>
        </div>
    );  
}

// 
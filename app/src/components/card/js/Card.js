import logoReact from '../style/logo.svg';
import "../style/card.css"
import ButtonEdit from '../../ButtonEdit/js/ButtonEdit';
import ButtonUpdate from '../../ButtonUpdate/js/ButtonUpdate';
import ButtonElimina from '../../ButtonElimina/js/ButtonElimina';
import { useEffect, useState } from "react";

export default function Card ({user, loadData, isLoading}){
    const [isBeingEdited, setBeingEdited] = useState(false);
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");

    function handleNameChange(event) {
        setNome(event.target.value); 
    }
    
    function handleSurnameChange(event) {
        setCognome(event.target.value);
    }

    return (
        <div className = "Card">
            <div>
                <img src = {logoReact} alt = "alt" width="175" height="175" />
            </div>

            <div className='infoDiv'>
                { isBeingEdited ? 
                    (
                    <div>
                        <input type="text" onChange={handleNameChange} value={nome} placeholder="Nome"></input>
                        <input type="text" onChange={handleSurnameChange} value={cognome} placeholder="Cognome"></input>
                    </div>
                    ) 
                    : 
                    (
                    <div>   
                        {user.nome} <br/>
                        {user.cognome}     
                    </div>   
                    )
                }
            </div>
            <div className='alignButtons flex-container'>
                <ButtonEdit isBeingEdited={isBeingEdited} updateMethod={setBeingEdited} nome = {nome} setNome = {setNome} cognome = {cognome}  setCognome = {setCognome}/>
                {
                    isBeingEdited ? 
                    <ButtonUpdate user = {user} loadData = {loadData} nome = {nome} cognome = {cognome}/>
                    :
                    <ButtonElimina user = {user} loadData = {loadData}/>
                }
            </div>
        </div>
    );  
}

// 
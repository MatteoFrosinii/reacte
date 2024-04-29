import { useState } from "react";

export default function Button({isBeingEdited, updateMethod, nome, setNome, cognome, setCognome}) {

  function setEdited() {
    if(isBeingEdited){
      updateMethod(false)
      setNome("")
      setCognome("")
    } else {
      updateMethod(true)
    }
    return isBeingEdited; 
  }

  return (
    <div>
      <button onClick={setEdited} className="bottone">
        { isBeingEdited ? 
          (
          <div>
            Annulla
          </div>
          ) 
          : 
          (
          <div>   
            Modifica
          </div>   
          )
        }
      </button>
    </div>
  );
}
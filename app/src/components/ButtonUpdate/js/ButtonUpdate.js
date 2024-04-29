import { useState } from "react";

export default function Button({ user ,loadData, nome, cognome}) {

  async function updateUser() {
    const response = await fetch(`http://localhost:8080/alunni/${user.id}`,
    {
        method : "PUT",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({id: user.id, nome: nome, cognome: cognome})
    }
    )
    loadData()
  }

  return (
    <div>
      <button onClick={updateUser} className="bottone">
        Aggiorna Alunno
      </button>
    </div>
  );
}
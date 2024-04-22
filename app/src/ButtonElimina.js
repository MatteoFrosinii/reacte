import { useState } from "react";

export default function Button({ user ,loadData}) {

  async function deleteUser() {
    const response = await fetch(`http://localhost:8080/alunni/${user.id}`, {method: "DELETE"})
    loadData()
  }

  return (
    <div>
      <button onClick={deleteUser} className="bottone">
        Cancella Alunno
      </button>
    </div>
  );
}
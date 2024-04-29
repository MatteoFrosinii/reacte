import { useState } from "react";

export default function Button({ user ,loadData}) {
  const [isDeleting, setDeleting] = useState(false);

  async function deleteUser() {
    const response = await fetch(`http://localhost:8080/alunni/${user.id}`, {method: "DELETE"})
    loadData()
  }

  function setEdited() {
    return isDeleting ? setDeleting(false) : setDeleting(true)
  }

  return (
    <div>
        { !isDeleting ? 
            <div> 
              <button onClick={setEdited}> Cancella Alunno </button>
            </div>
          :
            <div>
              Sei sicuro?
                <button onClick={deleteUser}> Si </button>
                <button onClick={setEdited}> No </button>
            </div>
        }
    </div>
  );
}
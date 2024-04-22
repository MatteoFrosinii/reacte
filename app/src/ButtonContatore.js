import { useState } from "react";

export default function Button({ user }) {
  const [contatore, setContatore] = useState(user.id);

  function incrementaNumero() {
    setContatore(contatore + 1);
  }

  return (
    <div>
      <button onClick={incrementaNumero} className="bottone">
        {contatore}
      </button>
    </div>
  );
}
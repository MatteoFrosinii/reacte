import "./App.css";
import Card from "./components/card/js/Card";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [showForm, setForm] = useState(false);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const response = await fetch("http://localhost:8080/alunni", {
      method: "GET",
    });
    const usersData = await response.json();
    setLoading(false);
    setUsers(usersData);
  }

  async function salvaAlunno() {
    setLoading(true);
    const response = await fetch("http://localhost:8080/alunni", 
      {
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({nome: nome, cognome: cognome})
      }
    );
    const usersData = await response.json();
    setLoading(false);
    loadData();
  }

  function handleNameChange(event) {
    setNome(event.target.value);
    
  }

  function handleSurnameChange(event) {
    setCognome(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="scrittaLista"> Lista alunni: </h1>
      {isLoading ? (
        <div className="loading">in caricamento...</div>
      ) : (
        <div className="flexbox flex-container">
          {users.map((user) => (
            <Card user={user} loadData={loadData} isLoading={isLoading} key={user.id} />
          ))}
        </div>
      )}
      <button onClick={() => setForm(true)}> Inserisci nuovo alunno </button>

      {showForm && (
        <div>
          <h1>Form di Inserimento</h1>
          <input type="text" onChange={handleNameChange} value={nome} placeholder="Nome"></input>
          <input type="text" onChange={handleSurnameChange} value={cognome} placeholder="Cognome"></input>
          <button onClick={salvaAlunno}>Salva</button>
          <button onClick={() => setForm(false)} >Annulla</button>
          {nome} {cognome}
        </div>
      )}

    </div>
  );
}

//flexbox css
//https://www.tutorialspoint.com/overlapping-elements-with-z-index-using-css#:~:text=Using%20CSS%20Z%2DIndex%20property,is%20mentioned%20last%20in%20document.
export default App;

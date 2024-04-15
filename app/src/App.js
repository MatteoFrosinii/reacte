import './App.css';
import Card from "./Card";

function App() {

  const users = [
    {id: 1, nome: "Nome 1", cognome: "Cognome 1"},
    {id: 2, nome: "Nome 2", cognome: "Cognome 2"},
    {id: 3, nome: "Nome 3", cognome: "Cognome 3"},
    {id: 4, nome: "Nome 4", cognome: "Cognome 4"},
    {id: 5, nome: "Nome 5", cognome: "Cognome 5"},
    {id: 6, nome: "Nome 6", cognome: "Cognome 6"},
    {id: 7, nome: "Nome 7", cognome: "Cognome 7"},
    {id: 8, nome: "Nome 8", cognome: "Cognome 8"},
    {id: 9, nome: "Nome 9", cognome: "Cognome 9"},
    {id: 10, nome: "Nome 10", cognome: "Cognome 10"},
  ]

  return (
    <div className = "App flex-container">
      {
        users.map(
          ((user) => <Card nome = {user.nome} cognome = {user.cognome} />)
          )
      }
    </div>
  );
}
//flexbox css
export default App;

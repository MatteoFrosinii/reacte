import './App.css';
import Card from "./Card";
import { useEffect, useState } from "react";
import ApiLoader from './ApiLoader.js';

function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isDeleting, setDeleting] = useState(false)

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    setLoading(true)
    const response = await fetch('http://localhost:8080/alunni', {method: "GET"})
    const usersData = await response.json()
    setLoading(false)

    setUsers(usersData)
  }

  function prova() {
    ApiLoader.getInstance().test();
  }

  return (
    <div className = "App">
    { prova }
    <h1 className='scrittaLista'> Lista alunni: </h1>
      {
        isLoading ? 
          <div className = "loading">
            in caricamento...
          </div>  :
        <div className = "flexbox flex-container">
          {
          users.map(((user) => 
          <Card user = {user} loadData={loadData} key = {user.id}/>))
          }
        </div>
      }
    </div>
  );
}
//flexbox css
// https://www.tutorialspoint.com/overlapping-elements-with-z-index-using-css#:~:text=Using%20CSS%20Z%2DIndex%20property,is%20mentioned%20last%20in%20document.
export default App;

import { useState } from "react";
import "./App.css";
import { Buscador } from "./Components/Buscador";


function App() {

  const [valorInput, setValorInput] = useState('hola');
  const [gifs, setGifs] = useState();


  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  }

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=puoAHOcYjckOvMJ5uPn5AoqrtNEpcREX&q=';
    const respone = await fetch(url);
    const data = await respone.json();
    console.log(data);
  }


  getGifs();

  return (
  <>  
  <Buscador
  valorInput={valorInput}
  onChange={onChange}
  />
  </>
  ) 
}

export default App;
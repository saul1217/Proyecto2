import { useState } from "react";
import "./App.css";
import { Buscador } from "./Components/Buscador";
import { GridGifs } from "./Components/GridGifs";


function App() {

  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);


  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  }

  const getGifs = async (query) => {
    const url =   `https://api.giphy.com/v1/gifs/search?api_key=puoAHOcYjckOvMJ5uPn5AoqrtNEpcREX&q=${query}`;
    const respone = await fetch(url);
    const data = await respone.json();
    return data.data
  }

   const onSubmit = async (evento) => {
        evento.preventDefault();
        const gifs = await getGifs(valorInput);
        setGifs(gifs);
    }


  return (
  <>  
  <Buscador
  valorInput={valorInput}
  onChange={onChange}
  onSubmit={onSubmit}
  />

  <GridGifs gifs={gifs}/>
 
  </>
  ) 
}

export default App;
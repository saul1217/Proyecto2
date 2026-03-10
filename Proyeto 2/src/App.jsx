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
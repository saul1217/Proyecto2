import { Buscador } from "./Components/Buscador";
import { GridGifs } from "./Components/GridGifs";
import './Components/Style.css'
import { UseSearchGifs } from "./Components/UseSearchGifs";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const{valorInput,onChange, onSubmit, gifs} = UseSearchGifs();
 


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
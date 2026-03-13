import { Buscador } from "./Components/Buscador";
import { GridGifs } from "./Components/GridGifs";
import './Components/Style.css'
import { UseSearchGifs } from "./Components/UseSearchGifs";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { PantallaInicio } from "./Pantallas/PantallaInicio";
import { PantallaNombre } from "./Pantallas/PantallaNombre";
import { PantallaResultado } from "./Pantallas/PantallaResultado";
import { PantallaBuscador } from "./Pantallas/PantallaBuscador";

function App() {
  const{valorInput,onChange, onSubmit, gifs} = UseSearchGifs();
 


  return (
  <>  <PantallaBuscador/>
  <Router>
    <Routes>
      <Route path="/s" element={<PantallaInicio />} /> 
      <Route path="Ingresa_nombre" element={<PantallaNombre/>} />     
      <Route path="Ingresa_nombre/resultado" element={<PantallaResultado/>} /> 
      <Route path="buscador" element={<Buscador/>}/>
    </Routes>
  </Router>
  </>
  ) 
}

export default App;
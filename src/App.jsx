import { Buscador } from "./Components/Buscador";
import { GridGifs } from "./Components/GridGifs";
import './Components/Style.css'
import { UseSearchGifs } from "./Components/UseSearchGifs";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { PantallaInicio } from "./Pantallas/PantallaInicio";
import { PantallaNombre } from "./Pantallas/PantallaNombre";
import { PantallaResultado } from "./Pantallas/PantallaResultado";

function App() {
  const{valorInput,onChange, onSubmit, gifs} = UseSearchGifs();
 


  return (
  <>  
  <Router>
    <Routes>
      <Route path="/" element={<PantallaInicio />} /> 
      <Route path="Ingresa_nombre" element={<PantallaNombre/>} />     
      <Route path="Ingresa_nombre/resultado" element={<PantallaResultado/>} /> 
    </Routes>
  </Router>
  </>
  ) 
}

export default App;
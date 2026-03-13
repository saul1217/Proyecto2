import { Buscador } from "./Components/Buscador";
import { GridGifs } from "./Components/GridGifs";
import './Components/Style.css'
import { UseSearchGifs } from "./Components/UseSearchGifs";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { PantallaInicio } from "./Pantallas/PantallaInicio";
import { PantallaNombre } from "./Pantallas/PantallaNombre";

function App() {
  const{valorInput,onChange, onSubmit, gifs} = UseSearchGifs();
 


  return (
  <>  
  <Router>
    <Routes>
      <Route path="/" element={<PantallaInicio />} /> 
      <Route path="Ingresa_nombre" element={<PantallaNombre/>} />     
    </Routes>
  </Router>
  </>
  ) 
}

export default App;
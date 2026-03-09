import "./App.css";
import { Buscador } from "./Components/Buscador";

 const onSubmit = async (evento) => {
    evento.preventDefault()
    const gifs = await getGifs(valorInput)
    setGifs(gifs)
  }
function App() {

  return (
  <>  
  <Buscador/>
  </>
  ) 
}

export default App;
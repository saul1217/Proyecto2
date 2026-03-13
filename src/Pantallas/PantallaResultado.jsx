import { useLocation, useNavigate } from "react-router-dom";

export const PantallaResultado = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const {nombre, gifAleatorio} = location.state || {};


  return(
    <>
    <div>
      <h1 className="text-white">Este es el gif que más te define {nombre}</h1>
      {gifAleatorio && gifAleatorio.length > 0 ? (
        gifAleatorio.map((gif) => (
      <img 
      key={gif.id} 
      src={gif.images.original.url} 
      alt={gif.title} 
      className="gif"/>
      ))
      ) : (
        <p className="text-xl mb-8 text-white"> Buscando tu gif...</p>
      ) }

        <div>
          <p>No te gusto el gif? puedes buscar más</p>
          <button onClick={() => navigate('/buscador')}>Buscar mas gifs</button>
        </div>
      </div>
    </>
  )
}
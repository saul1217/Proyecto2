import { useLocation } from "react-router-dom";

export const PantallaResultado = () => {
  const location = useLocation();
  const {nombre, gifAleatorio} = location.state || {};


  return(
    <>
    <div>
      <h1 className="text-white">Este es el gif que más te define{nombre}</h1>
      {gifAleatorio ? (
      <img src={gifAleatorio.images.original.url} alt={gifAleatorio.title} />) : (
        <p className="text-xl mb-8 text-white"> Buscando tu gif...</p>
      ) }

      <div>
        <p>No te gusto el gif? puedes buscar más</p>
        <button onClick={'/buscador'}>Buscar mas gifs</button>
      </div>
      </div>
    </>
  )
}
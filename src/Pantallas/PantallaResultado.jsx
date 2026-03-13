import { useLocation } from "react-router-dom";

export const PantallaResultado = () => {
  const location = useLocation();
  const {nombre, gifAleatorio} = location.state || {};


  return(
    <>
    <div>
      <h1 className="text-white">Este es el gif que mas se acerca a tu personalidad {nombre}</h1>
      <img src={gifAleatorio.images.original.url} alt={gifAleatorio.title} /> 
      </div>
    </>
  )
}
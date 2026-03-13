import { useLocation, useNavigate } from "react-router-dom";
import '../Components/Style.css'
export const PantallaResultado = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const {nombre, gifAleatorio} = location.state || {};


  return(
    <>
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-violet-800 to-slate-600 text-white p-4">
      <div  className="flex flex-col items-center w-full max-w-5xl">
      <h1 className="text-4xl text-whitemb-20 font-black p-8 rounded-full">Este es el gif que más te define {nombre}</h1>
      <div className="contenedor-resultado-gifs">
        
        {gifAleatorio && gifAleatorio.length > 0 ? (
          gifAleatorio.map((gif) => (
            <img 
            key={gif.id} 
            src={gif.images.original.url} 
            alt={gif.title} 
            className="w-full aspect-square object-cover rounded-xl shadow-lg transition-transform hover:scale-105 "/>
          ))
        ) : (
          <p className="text-xl mb-8 text-white"> Buscando tu gif...</p>
        ) }
      </div>

        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-3xl text-white mt-20 mb-10 font-black p-2 rounded-full " >No te gusto el gif ? puedes buscar más</p>
          <button onClick={() => navigate('/buscador')} className="bg-purple-600 hover:bg-purple-700 text-white text-4xl p-8 rounded-full transition-all">Buscar mas gifs</button>
        </div>
        </div>
      </div>
    </>
  )
}
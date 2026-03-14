import { useLocation, useNavigate } from "react-router-dom";
import '../Components/Style.css'
import { Footer } from "./Footer";
export const PantallaResultado = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const {nombre, gifAleatorio} = location.state || {};


  return(
    <>
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-violet-800 to-slate-600 text-white p-4">
      <div className="flex flex-col items-center w-full max-w-6xl">
      <h1 className="text-4xl text-whitemb-20 font-black p-8 rounded-full">Estos son los gifs que más te define {nombre}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-sm md:max-w-5xl mb-10 px-2 " >

        {gifAleatorio && gifAleatorio.length > 0 ? (
          gifAleatorio.map((gif) => (
            <img 
            key={gif.id} 
            src={gif.images.original.url} 
            alt={gif.title} 
            className="w-full aspect-square object-cover   hover:scale-105" 
                />
          ))
        ) : (
          <p className="text-xl mb-8 text-white"> Buscando tu gif...</p>
        ) }
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-3xl text-white  mb-10 font-black p-2 rounded-full " >No te gusto el gif ? puedes buscar más</p>
          <button onClick={() => navigate('/buscador')} className="bg-purple-600 hover:bg-purple-700 text-white text-4xl p-4 rounded-full">Buscar mas gifs</button>
      </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
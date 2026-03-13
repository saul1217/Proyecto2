import { useLocation, useNavigate } from "react-router-dom";

export const PantallaResultado = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const {nombre, gifAleatorio} = location.state || {};


  return(
    <>
    <div className="flex flex-col items-center text-center min-h-screen text-white bg-gradient-to-r from-violet-800 to-slate-600">
      <h1 className="text-8xl text-white mt-40 mb-20 font-black p-8 rounded-full">Este es el gif que más te define {nombre}</h1>
      <div className="flex flex-row flex-wrap justify-center gap-20">
        {gifAleatorio && gifAleatorio.length > 0 ? (
          gifAleatorio.map((gif) => (
            <img 
            key={gif.id} 
            src={gif.images.original.url} 
            alt={gif.title} 
            className="gif "/>
          ))
        ) : (
          <p className="text-xl mb-8 text-white"> Buscando tu gif...</p>
        ) }
      </div>

        <div className="">
          <p className="text-3xl text-white mt-20 mb-10 font-black p-2 rounded-full " >No te gusto el gif ? puedes buscar más</p>
          <button onClick={() => navigate('/buscador')} className="bg-purple-600 hover:bg-purple-700 text-white text-4xl p-8 rounded-full transition-all">Buscar mas gifs</button>
        </div>
      </div>
    </>
  )
}
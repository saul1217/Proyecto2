import { Footer } from "../Pantallas/Footer"
import { Gif } from "./Gif"
import './Style.css'

export const GridGifs = ({gifs}) =>{
    return(
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 w-full max-w-[95%] mx-auto pb-10 mt-4">

      {
        gifs.map(gif => (
          <Gif gif={gif} key={gif.id} />
        ))
      }
    </div>
    </>)
}
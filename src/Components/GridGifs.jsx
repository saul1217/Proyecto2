import { Gif } from "./Gif"
import './Style.css'

export const GridGifs = ({gifs}) =>{
    return(
    <>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 w-full max-w-6xl mx-auto overflow-hidden pb-10">

      {
        gifs.map(gif => (
          <Gif gif={gif} key={gif.id} />
        ))
      }
    </div>
    </>)
}
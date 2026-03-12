import { Gif } from "./Gif"
import './Style.css'

export const GridGifs = ({gifs}) =>{
    return(
    <>
    <div className="contenedor-gifs">

      {
        gifs.map(gif => (
          <Gif gif={gif} key={gif.id} />
        ))
      }
    </div>
    </>)
}
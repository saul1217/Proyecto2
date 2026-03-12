import { Gif } from "./Gif"
import './Style.css'

export const GridGifs = ({gifs}) =>{
    return(
    <>
    {
    gifs.map(gif => (
    <Gif gif={gif} key={gif.id} />
    ))
  }
    </>)
}
import { Gif } from "./Gif"
export const GridGifs = ({gifs}) =>{
    return(
    <>
    {
    gifs.map(gif => (
    <Gif gif={gif}/>
    ))
  }
    </>)
}
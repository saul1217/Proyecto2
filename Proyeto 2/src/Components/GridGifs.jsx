export const GridGifs = ({gifs}) =>{
    return(
    <>
    {
   gifs.map(gif => (
    <img 
      key={gif.id} 
      src={gif.images.original.url} 
      alt={gif.title} 
    />
    ))
  }
    </>)
}
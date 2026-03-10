
export const Gif = ({gif}) => {
    return(
        <>{
            <img 
            key={gif.id} 
            src={gif.images.original.url} 
            alt={gif.title} 
            /> 
        }
        </>
    )
}
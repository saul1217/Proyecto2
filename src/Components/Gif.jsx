import './Style.css'
import 'tailwindcss'



export const Gif = ({gif}) => {
    return(
        <>{
            <img 
            className="gif transition-transform duration-300 hover:scale-105 hover:rotate-2 cursor-pointer"
            src={gif.images.original.url} 
            alt={gif.title} 
            /> 
        }
        </>
    )
}
import { Buscador } from "../Components/Buscador"
import { GridGifs } from "../Components/GridGifs"
import { UseSearchGifs } from "../Components/UseSearchGifs";
import { Footer } from "./Footer";

export const PantallaBuscador = () => {
    const { valorInput, onChange, onSubmit, gifs} = UseSearchGifs();
    
    return(
        <><div className="min-h-screen flex flex-col">

            <div className="flex-grow">   

            <Buscador
            valorInput={valorInput}
            onChange={onChange}
            onSubmit={onSubmit} />

            <GridGifs
            gifs={gifs}/>
            </div>
            </div>
            <Footer className="bg-black"/>
        </>
    )
}
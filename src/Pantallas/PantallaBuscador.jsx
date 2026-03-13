import { Buscador } from "../Components/Buscador"
import { GridGifs } from "../Components/GridGifs"
import { UseSearchGifs } from "../Components/UseSearchGifs";

export const PantallaBuscador = () => {
    const { valorInput, onChange, onSubmit, gifs} = UseSearchGifs();
    
    return(
        <>
        <div className="">
            <div className="flex flex-row justify-center">

            <Buscador
            valorInput={valorInput}
            onChange={onChange}
            onSubmit={onSubmit} className="ml-20"/>

            <button className="mr-10 bg-white rounded-full " >home</button>
            </div>
            <GridGifs
            gifs={gifs}/>
        </div>
        </>
    )
}
import { Buscador } from "../Components/Buscador"
import { GridGifs } from "../Components/GridGifs"
import { UseSearchGifs } from "../Components/UseSearchGifs";

export const PantallaBuscador = () => {
    const { valorInput, onChange, onSubmit, gifs} = UseSearchGifs();
    return(
        <>
        <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}/>
        <GridGifs
        gifs={gifs}/>
        </>
    )
}
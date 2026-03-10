import './Style.css';
export const Buscador = (valorInput, onChange) => {

    const onSubmit = async (evento) =>{
        evento.preventDefault()
        const gifs =await getGifs(valorInput)
        console.log(gifs)
    }
    
    
    return (
        <>
        <form onSubmit={onSubmit}>
            <input  className="buscador" value={valorInput} onChange={onChange}/>
        </form>
        </>
    )
}
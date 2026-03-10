import './Style.css';
export const Buscador = ({valorInput, onChange, onSubmit}) => {



    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const resultadoGifs = await onSubmit(valorInput);
        console.log(resultadoGifs);
    }
    
    
    return (
        <> 
        <form onSubmit={handleSubmit}>
            <input  className="buscador" value={valorInput} onChange={onChange}/>
        </form>
        </>
    )
}
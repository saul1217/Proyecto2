import './Style.css';
export const Buscador = (onSubmit, valorInput, onChange) => {
    return (
        <>
        <form onSubmit={onSubmit}>
            <input  className="buscador" value={valorInput} onChange={onChange}/>
        </form>
        </>
    )
}
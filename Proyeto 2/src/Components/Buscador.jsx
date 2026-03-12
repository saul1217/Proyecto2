import './Style.css';
export const Buscador = ({onSubmit, valorInput, onChange}) => {

    return (
        <> 
        <form onSubmit={onSubmit} className='form-buscador'>
            <input  className="buscador" value={valorInput} onChange={onChange}/>
        </form>
        </>
    )
}
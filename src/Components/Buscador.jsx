import { useNavigate } from 'react-router-dom';
import './Style.css';
export const Buscador = ({onSubmit, valorInput, onChange}) => {
    const navigate = useNavigate();
    return (
        
        <> 
        <div className="w-full relative flex justify-center items-center py-5">
            <form onSubmit={onSubmit} className='text-center'>
                <input  className="buscador" value={valorInput} onChange={onChange}/>
            </form>
                <button onClick={() => navigate('/')} className="absolute right-8 bg-white hover:bg-blue-700 text-black text-xl p-1 rounded-2xl transition-all">home</button>
        </div>
        </>
    )
}
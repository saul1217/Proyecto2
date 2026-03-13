import { useNavigate } from "react-router-dom"
import 'tailwindcss'

export const PantallaInicio = () =>{
    const navigate = useNavigate();

    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-violet-800 to-slate-600">
            <h1 className="text-4xl ]">Descubre tu gif</h1>
            <button onClick={() => navigate('Ingresa_nombre')} className="bg-blue-700 text-white transition-all rounded-full text-2xl p-8 m-9">
                Descubre el gif que te define segun tu nombre 
            </button>
        </div>
        </>
    )
}
import { useLocation } from "react-router-dom";
export const Footer = () => {
    const location = useLocation();
    const esBuscador = location.pathname === '/buscador';
    return(
        <>
<footer className={`flex flex-col items-center text-xl justify-center pb-8 pt-8 text-white ${esBuscador ? 'bg-stone-900' : 'bg-gradient-to-r from-violet-900 to-slate-500'}`}>            <div>
                <p>Trabajo humilde hecho por saul</p>
            </div>
        </footer>
        </>
    )
}